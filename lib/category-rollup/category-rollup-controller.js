'use strict';

module.exports = (categoryRollupService) => {
  const AppError = require('../app-error').AppError;
  const appCodes = require('../app-codes');

  return {
    async createCategoryRollup(categoryRollup) {
      try {
        const ret = await categoryRollupService.create(categoryRollup);
        return await categoryRollupService.fetch({ id: ret });
      } catch (e) {
        throw e;
      }
    },
    async updateCategoryRollup(updatedCategoryRollup) {
      try {
        const prevCategoryRollup = await categoryRollupService.fetch({id: updatedCategoryRollup.id});
        if (prevCategoryRollup.length === 0) {
          throw new AppError(appCodes.INVALID_CATEGORY_ID);
        }
        await categoryRollupService.update(updatedCategoryRollup);
        return await categoryRollupService.fetch({ id: updatedRollupCategory.id });
      } catch (e) {
        throw e;
      }
    },
    async fetchCategoryRollup(queryParams) {
      try {
        return await categoryRollupService.fetch(queryParams);
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
  }
};