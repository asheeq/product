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
    if (queryParams.type){
      condition['type'] = {
        [db.Sequelize.Op.eq]: queryParams.type
      };
    }
    if (queryParams.associatedWith) {
      condition['associatedWith'] = {
        [db.Sequelize.Op.eq]: queryParams.associatedWith
      };
    }
    if (queryParams.associated) {
      condition['associated'] = {
        [db.Sequelize.Op.eq]: queryParams.associated
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
    async create(productAssociation) {
      return await db['ProductAssociation']
        .upsert({
          quantity: productAssociation.quantity,
          type: productAssociation.type,
          associatedWith: productAssociation.associatedWith,
          associated: productAssociation.associated,
          fromDate: productAssociation.fromDate,
          thruDate: productAssociation.thruDate,
          createdBy: productAssociation.createdBy
        }, {returning: true})
        .catch(() => {
          throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
        });
    },
    async update(updatedProductAssociation) {
      return await db['ProductAssociation']
        .update(updatedProductAssociation, {
          where: {
            id: {
              [db.Sequelize.Op.eq]: updatedProductAssociation.id
            }            
          }
        })
        .then(([affectedRows]) => {
          if (affectedRows <= 0) {
            throw new AppError(appCodes.PRODUCT_ASSOCIATION_UPDATE_FAILED);
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
      if(queryParams.offset){
        queryParams.offset = parseInt(queryParams.offset);
      }
      if(queryParams.limit){
        queryParams.limit = parseInt(queryParams.limit);
      }
      return await db['ProductAssociation']
        .findAll({
          where: buildConditionForQuery(queryParams)
        })
        .then((productAssociation) => {
          return productAssociation.map(productAssociation => productAssociation.dataValues);
        })
        .catch(()=> {
          throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
        });
    }
  };
};