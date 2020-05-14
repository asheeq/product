/* eslint-disable no-useless-catch */
'use strict';

module.exports = (productService) => {
  const AppError = require('../app-error').AppError;
  const appCodes = require('../app-codes');

  return {
    async createProduct(product) {
      try {
        const ret = await productService.create(product);
        return await productService.fetch({ id: ret });
      } catch (e) {
        throw e;
      }
    },
    async updateProduct(updatedProduct) {
      try {
        const prevProduct = await productService.fetch({id: updatedProduct.id});
        if (prevProduct.length === 0) {
          throw new AppError(appCodes.INVALID_PRODUCT_ID);
        }
        await productService.update(updatedProduct);
        return await productService.fetch({ id: updatedProduct.id });
      } catch (e) {
        throw e;
      }
    },
    async fetchProducts(queryParams) {
      try {
        return await productService.fetch(queryParams);
      } catch (e) {
        throw e;
      }
    }
  };
};