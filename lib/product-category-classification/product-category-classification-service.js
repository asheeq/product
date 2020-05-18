'use strict';

module.exports = (db) => {
  const AppError = require('../app-error').AppError;
  const appCodes = require('../app-codes');

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
    if (queryParams.isPrimary) {
      condition['isPrimary'] = {
        [db.Sequelize.Op.eq]: queryParams.isPrimary
      };
    }
    if (queryParams.fromDate) {
      condition['createdAt'] = {
        [db.Sequelize.Op.gte]: queryParams.fromDate
      };
    }
    if (queryParams.thruDate) {
      condition['createdAt'] = {
        [db.Sequelize.Op.lte]: queryParams.thruDate
      };
    }
    return condition;
  }
  return {
    async create(productClassification) {
      if(productClassification.isPrimary == 'true'){
        productClassification['isPrimary'] = 1;
      }
      if(productClassification.isPrimary == 'false'){
        productClassification['isPrimary'] = 0;
      }
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
      if(updatedProductClassification.isPrimary == 'true'){
        updatedProductClassification['isPrimary'] = 1;
      }
      if(updatedProductClassification.isPrimary == 'false'){
        updatedProductClassification['isPrimary'] = 0;
      }
      return await db['ProductCategoryClassification']
        .update(updatedProductClassification, {
          where: {
            id: {
              [db.Sequelize.Op.eq]: updatedProductClassification.id
            }            
          }
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
    },
    async fetch(queryParams) {
      if(queryParams.isPrimary == 'true'){
        queryParams.isPrimary = 1;
      }
      if(queryParams.isPrimary == 'false'){
        queryParams.isPrimary == 0;
      }
      return await db['ProductCategoryClassification']
        .findAll({
          where: buildConditionForQuery(queryParams)
        })
        .then((productClassification) => {
          return productClassification.map(productClassification => productClassification.dataValues);
        })
        .catch(() => {
          throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
        });
    },
    async fetchPrimary(queryParams) {
      return await db['ProductCategoryClassification']  
        .findOne({
          where: buildConditionForQuery(queryParams)
        })
        .then(productClassification => {
          if(productClassification){
            return productClassification.isPrimary;
          }
        })
        .catch(() => {
          throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
        });
    }
  };
};