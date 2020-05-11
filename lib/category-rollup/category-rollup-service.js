'use strict';

module.exports = (db) => {
  const AppError = require('../app-error').AppError;
  const appCodes = require('../app-codes');

  function buildConditionForQuery(queryParams) {
    const condition = {};
    if (queryParams.id) {
      condition['id'] = {
        [db.Sequelize.Op.eq]: queryParams.id
      }
    }
    if (queryParams.partOf) {
      condition['partOf'] = {
        [db.Sequelize.Op.eq]: queryParams.partOf
      }
    }
    if (queryParams.madeUpOf) {
      condition['madeUpOf'] = {
        [db.Sequelize.Op.eq]: queryParams.madeUpOf
      }
    }
    return condition;
  }

  return {
    async create(categoryRollup) {
      return await db['ProductCategoryRollup']
        .create(categoryRollup)
        .then(categoryRollup => {
          return categoryRollup.dataValues.id;
        })
        .catch(err => {
          if (err instanceof db.Sequelize.UniqueConstraintError) {
            throw new AppError(appCodes.DUPLICATE_CATEGORY_NAME);
          }
          throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
        });
    },
    async update(updatedCategoryRollup) {
      return await db['ProductCategoryRollup']
        .update(updatedCategoryRollup, {
          where: {
            id: {
              [db.Sequelize.Op.eq]: updatedCategoryRollup.id
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
          if (err.constructor.name === 'AppError') {
            throw err;
          }
          throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
        });
    },
    async fetch(queryParams) {
      return await db['ProductCategoryRollup']
        .findAll({
          where: buildConditionForQuery(queryParams)
        })
        .then((categoryRollup) => {
          return categoryRollup.map(categoryRollup => categoryRollup.dataValues);
        })
        .catch(err => {
          console.log(err);
          throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
        })
    }
  }
};