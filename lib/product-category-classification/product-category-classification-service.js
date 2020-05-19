/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';

module.exports = (db) => {
  const AppError = require('../app-error').AppError;
  const appCodes = require('../app-codes');
  const constants = require('../constants');

  function buildConditionForQuery(queryParams) {
    const condition = {};
    if (queryParams.id) {
      condition['id'] = {
        [db.Sequelize.Op.eq]: queryParams.id
      };
    }
    if (queryParams.productId) {
      condition['productId'] = {
        [db.Sequelize.Op.eq]: queryParams.productId
      };
    }
    if (queryParams.categoryId) {
      condition['categoryId'] = {
        [db.Sequelize.Op.eq]: queryParams.categoryId
      };
    }
    if (queryParams.isPrimary !== undefined) {
      condition['isPrimary'] = {
        [db.Sequelize.Op.eq]: (queryParams.isPrimary === 'true' || queryParams.isPrimary)
      };
    }
    if (queryParams.startDate) {
      condition['createdAt'] = {
        [db.Sequelize.Op.gte]: queryParams.startDate
      };
    }
    if (queryParams.endDate) {
      condition['createdAt'] = {
        [db.Sequelize.Op.lte]: queryParams.endDate
      };
    }
    return condition;
  }
  return {
    async create(productClassification) {
      return await db['ProductCategoryClassification']
        .create(productClassification)
        .then(productClassification => {
          return productClassification.dataValues.id;
        })
        .catch(err => {
          if (err instanceof db.Sequelize.UniqueConstraintError) {
            throw new AppError(appCodes.DUPLICATE_PRODUCT_CATEGORY_PAIR);
          }
          throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
        });
    },
    async update(updatedProductClassification) {
      return await db.sequelize.transaction(async (t) => {
        if (updatedProductClassification.isPrimary) {
          await db['ProductCategoryClassification']
            .update({
              isPrimary: false
            }, {
              where: {
                productId: {
                  [db.Sequelize.Op.eq]: updatedProductClassification.productId
                },
                isPrimary:{
                  [db.Sequelize.Op.eq]: constants.PRIMARY
                }
              },
              transaction: t
            })
            .then(([affectedRows]) => {
              if (affectedRows <= 0) {
                throw new AppError(appCodes.PRODUCT_CATEGORY_CLASSIFICATION_UPDATE_FAILED);
              }
              return affectedRows;
            })
            .catch(err => {
              if (err.constructor.name === 'AppError') {
                throw err;
              }
              throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
            });
        }
        return db['ProductCategoryClassification']
          .update(updatedProductClassification, {
            where: {
              Id: {
                [db.Sequelize.Op.eq]: updatedProductClassification.id
              }
            },
            transaction: t
          })
          .then(([affectedRows]) => {
            if (affectedRows <= 0) {
              throw new AppError(appCodes.PRODUCT_CATEGORY_CLASSIFICATION_UPDATE_FAILED);
            }
            return affectedRows;
          })
          .catch(err => {
            if (err.constructor.name === 'AppError') {
              throw err;
            }
            throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
          });
      })
        .catch(err => {
          throw err;
        });
    },
    async fetch(queryParams) {
      if(queryParams.offset){
        queryParams.offset = parseInt(queryParams.offset);
      }
      if(queryParams.limit){
        queryParams.limit = parseInt(queryParams.limit);
      }
      return await db['ProductCategoryClassification']
        .findAll({
          offset: queryParams.offset,
          limit: queryParams.limit,
          where: buildConditionForQuery(queryParams)
        })
        .then((productClassification) => {
          return productClassification.map(productClassification => productClassification.dataValues);
        })
        .catch(() => {
          throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
        });
    },
    async hasPrimaryCategory(productId) {
      return await db['ProductCategoryClassification']  
        .count({
          where: {
            productId: {
  	          [db.Sequelize.Op.eq]: productId
            },
            isPrimary: {
              [db.Sequelize.Op.eq]: true	
            }
          }
        })
        .then(counter => {
          return (counter === 1);
        })
        .catch(() => {
          throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
        });
    }
  };
};