/* eslint-disable no-useless-catch */
'use strict';

module.exports = (productClassificationService,productService,categoryService) => {
  const AppError = require('../app-error').AppError;
  const appCodes = require('../app-codes');
  const constants = require('../constants');
  
  return {
    async createProductClassification(productClassification) {
      try {
        const products = await productService.fetchProducts({id: productClassification.productId});
        if (products.length === 0){
          throw new AppError(appCodes.INVALID_PRODUCT_ID);
        }
        const categories = await categoryService.fetchCategories({id: productClassification.categoryId});
        if (categories.length === 0){
          throw new AppError(appCodes.INVALID_CATEGORY_ID);
        }
        const primaryCategory = await productClassificationService.hasPrimaryCategory(productClassification.productId);
        productClassification.isPrimary = !primaryCategory;
        if(!productClassification.fromDate){
          productClassification.fromDate = new Date();
        }
        if(!productClassification.thruDate){
          productClassification.thruDate = constants.DEFAULT_THRU_DATE;
        }
        const id = await productClassificationService.create(productClassification);
        return await productClassificationService.fetch({ id: id });
      } catch (e) {
        throw e;
      }
    },
    async updateProductClassification(updatedProductClassification) {
      try {
        const prevProductClassification = await productClassificationService.fetch({id: updatedProductClassification.id});
        if (prevProductClassification.length === 0) {
          throw new AppError(appCodes.INVALID_PRODUCT_CATEGORY_CLASSIFICATION_ID);
        }
        const products = await productClassificationService.fetch({id: updatedProductClassification.id});
        updatedProductClassification.productId = products[0].productId;
        if(updatedProductClassification.isPrimary){
          updatedProductClassification.isPrimary = true; 
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