/* eslint-disable no-useless-catch */
'use strict';

module.exports = (categoryService) => {
  const AppError = require('../app-error').AppError;
  const appCodes = require('../app-codes');

  return {
    async createCategory(category) {
      try {
        const ret = await categoryService.create(category);
        return await categoryService.fetch({ id: ret });
      } catch (e) {
        throw e;
      }
    },
    async updateCategory(updatedCategory) {
      try {
        const prevCategory = await categoryService.fetch({id: updatedCategory.id});
        if (prevCategory.length === 0) {
          throw new AppError(appCodes.INVALID_CATEGORY_ID);
        }
        await categoryService.update(updatedCategory);
        return await categoryService.fetch({ id: updatedCategory.id });
      } catch (e) {
        throw e;
      }
    },
    async fetchCategories(queryParams) {
      try {
        console.log('fetchCategories');
        return await categoryService.fetch(queryParams);
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
  };
};