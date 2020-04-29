'use strict';

const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

const appCodes = require('../lib/app-codes');
const AppError = require('../lib/app-error').AppError;
const responseHandler = require('../utils/response-handler');

module.exports = (objectSchema) => {
  return function validationHandler(req, res, next) {
    const validationResult = Joi.validate(req.body, objectSchema, {convert: true});

    if (validationResult.error !== null) {
      const err = new AppError(
        appCodes.BAD_REQUEST,
        {
          details: validationResult.error.details.pop().message
        }
      );
      return responseHandler(err, req, res);
    }

    next();
  };
};