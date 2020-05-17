/* eslint-disable no-useless-catch */
'use strict';

module.exports = (productClassificationService,productService,categoryService) => {
  const AppError = require('../app-error').AppError;
  const appCodes = require('../app-codes');
  const constants = require('../constants');

  return {
    async createProductClassification(productClassification) {
      try {
        const productId = await productService.fetchProducts({id: productClassification.productId});
        const categoryId = await categoryService.fetchCategories({id: productClassification.categoryId});
        if (productId.length === 0){
          throw new AppError(appCodes.INVALID_PRODUCT_ID);
        }  
        if (categoryId.length === 0){
          throw new AppError(appCodes.INVALID_CATEGORY_ID);
        }
        if(!productClassification.fromDate){
          productClassification['fromDate'] = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate());
        }
        if(!productClassification.thruDate){
          productClassification['thruDate'] = constants.DEFAULT_THRU_DATE;
        }
        if(productClassification.isPrimary == 'true'){
          const ret = await productClassificationService.fetch({productId: productClassification.productId});
          //console.log(ret);
          for(var key in ret)
          {
            if(key.isPrimary === 1){
              throw new AppError(appCodes.ONE_PRODUCT_CAN_HAVE_ONE_PRIMARY_CATEGORY);
            }
          }         
        }
        const rt = await productClassificationService.create(productClassification);
        return await productClassificationService.fetch({ id: rt });
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async updateProductClassification(updatedProductClassification) {
      try {
        const prevProductClassification = await productClassificationService.fetch({id: updatedProductClassification.id});
        if (prevProductClassification.length === 0) {
          throw new AppError(appCodes.INVALID_PRODUCT_CATEGORY_CLASSIFICATION_ID);
        }
        if(updatedProductClassification.isPrimary == 'true'){
          const ret = await productClassificationService.fetch({id: updatedProductClassification.productId});
          if(ret.isPrimary === 1){
            throw new AppError(appCodes.ONE_PRODUCT_CAN_HAVE_ONE_PRIMARY_CATEGORY);
          }
        }
        await productClassificationService.update(updatedProductClassification);
        return await productClassificationService.fetch({ id: updatedProductClassification.id });
      } catch (e) {
        throw e;
      }
    },
    async fetchProductClassification(queryParams) {
      try {
        return await productClassificationService.fetch(queryParams);
      } catch (e) {
        throw e;
      }
    }
  };
};