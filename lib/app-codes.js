/* eslint-disable linebreak-style */
'use strict';

const httpCodes = require('./http-codes');

module.exports = {
  SUCCESS: {
    httpCode: httpCodes.OK.code,
    code: 0,
    title: 'Success',
    details: 'Success'
  },
  DUPLICATE_CATEGORY_NAME: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 1,
    title: 'Bad Request',
    details: 'Duplicate Category name'
  },
  CATEGORY_UPDATE_FAILED: {
    httpCode: httpCodes.PRECONDITION_FAILED.code,
    code: 2,
    title: 'Precondition Failed',
    details: 'Category update failed'
  },
  INVALID_CATEGORY_ID: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 3,
    title: 'Bad Request',
    details: 'Invalid Category Id'
  },
  INVALID_CATEGORY_ROLLUP_ID:{
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 4,
    title: 'Bad Request',
    details: 'Invalide Category Rollup Id'
  },
  CATEGORY_ROLLUP_UPDATE_FAILED: {
    httpCode: httpCodes.PRECONDITION_FAILED.code,
    code: 5,
    title: 'Precondition Failed',
    details: 'Category Rollup update failed'
  },
  INVALID_CATEGORY_ID_FOR_PARTOF: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 6,
    title: 'Bad Request',
    details: 'Invalid Category Id for PartOf'
  },
  INVALID_CATEGORY_ID_FOR_MADEUPOF: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 7,
    title: 'Bad Request',
    details: 'Invalid Category Id for MadeUpOf'
  },
  DUPLICATE_PRODUCT_NAME: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 8,
    title: 'Bad Request',
    details: 'Duplicate Product name'
  },
  PRODUCT_UPDATE_FAILED: {
    httpCode: httpCodes.PRECONDITION_FAILED.code,
    code: 9,
    title: 'Precondition Failed',
    details: 'Product update failed'
  },
  INVALID_PRODUCT_ID: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 10,
    title: 'Bad Request',
    details: 'Invalid Product Id'
  },
  ONE_PRODUCT_CAN_HAVE_ONE_PRIMARY_CATEGORY: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 11,
    title: 'Bad Request',
    details: 'One Product can have One Primary Category'
  },
  INVALID_PRODUCT_CATEGORY_CLASSIFICATION_ID: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 12,
    title: 'Bad Request',
    details: 'Invalid Product Category Classification Id'
  },
  DUPLICATE_PRODUCT_CATEGORY_PAIR: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 13,
    title: 'Bad Request',
    details: 'Duplicate Product Category Pair'
  },
  INVALID_PRODUCT_ID_FOR_ASSOCIATED_WITH: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 14,
    title: 'Bad Request',
    details: 'Invalid Product Id for AssociatedWith'
  },
  INVALID_PRODUCT_ID_FOR_ASSOCIATED: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 15,
    title: 'Bad Request',
    details: 'Invalid Product Id for Associated'
  },
  INVALID_PRODUCT_ASSOCIATION_ID: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 16,
    title: 'Bad Request',
    details: 'Invalid Product Association Id'
  },
  PRODUCT_ASSOCIATION_UPDATE_FAILED: {
    httpCode: httpCodes.PRECONDITION_FAILED.code,
    code: 17,
    title: 'Precondition Failed',
    details: 'Product Association update failed'
  },
  DUPLICATE_PRODUCT_ASSOCIATION_TUPLE: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 18,
    title: 'Bad Request',
    details: 'Duplicate Product Association Tuple'
  },
  NOT_FOUND: {
    httpCode: httpCodes.NOT_FOUND.code,
    code: 253,
    title: httpCodes.NOT_FOUND.msg,
    details: httpCodes.NOT_FOUND.msg
  },
  BAD_REQUEST: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 254,
    title: httpCodes.BAD_REQUEST.msg,
    details: httpCodes.BAD_REQUEST.msg
  },
  INTERNAL_SERVER_ERROR: {
    httpCode: httpCodes.INTERNAL_SERVER_ERROR.code,
    code: 255,
    title: httpCodes.INTERNAL_SERVER_ERROR.msg,
    details: httpCodes.INTERNAL_SERVER_ERROR.msg
  }
};