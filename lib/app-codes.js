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
  INVALID_CATEGORY_NAME: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 3,
    title: 'Bad Request',
    details: 'Invalid Category Name'
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