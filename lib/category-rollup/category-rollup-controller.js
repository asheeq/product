/* eslint-disable no-useless-catch */
'use strict';

module.exports = (categoryRollupService,categoryService) => {
  const AppError = require('../app-error').AppError;
  const appCodes = require('../app-codes');

  return {
    async createCategoryRollup(categoryRollup) {
      try {
        const categoryIdOfPartOf = await categoryService.fetchCategories({id: categoryRollup.partOf});
        const categoryIdOfMadeUpOf = await categoryService.fetchCategories({id: categoryRollup.madeUpOf});
        if (categoryIdOfPartOf.length === 0 || categoryIdOfMadeUpOf.length === 0) {
          if(categoryIdOfPartOf.length === 0)
          {
            throw new AppError(appCodes.INVALID_CATEGORY_ID_FOR_PARTOF);
          }
          else
          {
            throw new AppError(appCodes.INVALID_CATEGORY_ID_FOR_MADEUPOF);
          }
        }
        await categoryRollupService.create(categoryRollup);
        return await categoryRollupService.fetch({ partOf: categoryRollup.partOf, madeUpOf: categoryRollup.madeUpOf});
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async updateCategoryRollup(updatedCategoryRollup) {
      try {
        const prevCategoryRollup = await categoryRollupService.fetch({id: updatedCategoryRollup.id});
        if (prevCategoryRollup.length === 0) {
          throw new AppError(appCodes.INVALID_CATEGORY_ROLLUP_ID);
        }
        await categoryRollupService.update(updatedCategoryRollup);
        return await categoryRollupService.fetch({ id: updatedCategoryRollup.id });
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
  };
};