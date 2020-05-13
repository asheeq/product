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
    return condition;
  }

  return {
    async create(category) {
      return await db['ProductCategory']
        .create(category)
        .then(category => {
          return category.dataValues.id;
        })
        .catch(err => {
          if (err instanceof db.Sequelize.UniqueConstraintError) {
            throw new AppError(appCodes.DUPLICATE_CATEGORY_NAME);
          }
          throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
        });
    },
    async update(updatedCategory) {
      return await db['ProductCategory']
        .update(updatedCategory, {
          where: {
            id: {
              [db.Sequelize.Op.eq]: updatedCategory.id
            }
          }
        })
        .then(([affectedRows]) => {
          if (affectedRows <= 0) {
            throw new AppError(appCodes.CATEGORY_UPDATE_FAILED);
          }
          return affectedRows;
        })
        .catch(err => {
          if (err instanceof db.Sequelize.UniqueConstraintError) {
            throw new AppError(appCodes.DUPLICATE_CATEGORY_NAME);
          }
          if (err.constructor.name === 'AppError') {
            throw err;
          }
          throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
        });
    },
    async fetch(queryParams) {
      console.log('fetch');
      return await db['ProductCategory']
        .findAll({
          where: buildConditionForQuery(queryParams)
        })
        .then((categories) => {
          return categories.map(categories => categories.dataValues);
        })
        .catch(err => {
          console.log(err);
          throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
        });
    }
  };
};