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
    if (queryParams.name) {
      condition['name'] = {
        [db.Sequelize.Op.eq]: queryParams.name
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
    async create(product) {
      return await db['Product']
        .create(product)
        .then(product => {
          return product.dataValues.id;
        })
        .catch(err => {
          if (err instanceof db.Sequelize.UniqueConstraintError) {
            throw new AppError(appCodes.DUPLICATE_PRODUCT_NAME);
          }
          throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
        });
    },
    async update(updatedProduct) {
      return await db['Product']
        .update(updatedProduct, {
          where: {
            id: {
              [db.Sequelize.Op.eq]: updatedProduct.id
            }
          }
        })
        .then(([affectedRows]) => {
          if (affectedRows <= 0) {
            throw new AppError(appCodes.PRODUCT_UPDATE_FAILED);
          }
          return affectedRows;
        })
        .catch(err => {
          if (err instanceof db.Sequelize.UniqueConstraintError) {
            throw new AppError(appCodes.DUPLICATE_PRODUCT_NAME);
          }
          if (err.constructor.name === 'AppError') {
            throw err;
          }
          throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
        });
    },
    async fetch(queryParams) {
      if(queryParams.offset){
        queryParams.offset = parseInt(queryParams.offset);
      }
      if(queryParams.limit){
        queryParams.limit = parseInt(queryParams.limit);
      }
      return await db['Product']
        .findAll({
          offset: queryParams.offset,
          limit: queryParams.limit,
          where: buildConditionForQuery(queryParams)
        })
        .then((products) => {
          return products.map(products => products.dataValues);
        })
        .catch(() => {
          throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
        });
    }
  };
};