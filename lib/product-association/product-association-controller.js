/* eslint-disable no-useless-catch */
'use strict';

module.exports = (productAssociationService,productService) => {
  const AppError = require('../app-error').AppError;
  const appCodes = require('../app-codes');
  const constants = require('../constants');

  return {
    async createProductAssociation(productAssociation) {
      try {
        const productIdOfAssociatedWith = await productService.fetchProducts({id: productAssociation.associatedWith});
        if (productIdOfAssociatedWith.length === 0){
          throw new AppError(appCodes.INVALID_PRODUCT_ID_FOR_ASSOCIATED);
        }
        const productIdOfAssociated = await productService.fetchProducts({id: productAssociation.associated});
        if (productIdOfAssociated.length === 0){
          throw new AppError(appCodes.INVALID_PRODUCT_ID_FOR_ASSOCIATED_WITH);
        }
        if(!productAssociation.fromDate){
          productAssociation.fromDate = new Date();
        }
        if(!productAssociation.thruDate){
          productAssociation.thruDate = constants.DEFAULT_THRU_DATE;
        }  
        await productAssociationService.create(productAssociation);
        return await productAssociationService.fetch({ associatedWith: productAssociation.associatedWith, associated: productAssociation.associated});
      } catch (e) {
        throw e;
      }
    },
    async updateProductAssociation(updatedProductAssociation) {
      try {
        const prevProductAssociation = await productAssociationService.fetch({id: updatedProductAssociation.id});
        if (prevProductAssociation.length === 0) {
          throw new AppError(appCodes.INVALID_PRODUCT_ASSOCIATION_ID);
        }
        await productAssociationService.update(updatedProductAssociation);
        return await productAssociationService.fetch({ id: updatedProductAssociation.id });
      } catch (e) {
        throw e;
      }
    },
    async fetchProductAssociation(queryParams) {
      try {
        return await productAssociationService.fetch(queryParams);
      } catch (e) {
        throw e;
      }
    }
  };
};