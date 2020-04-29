'use strict';

const vsprintf = require('sprintf-js').vsprintf;
const BAD_REQUEST = require('./app-codes').BAD_REQUEST;

function AppError(error, options) {
  Error.call(this);
  Error.captureStackTrace(this);

  error = Object.assign(BAD_REQUEST, error);
  options = options || {};

  this.httpCode = error.httpCode;
  this.code = error.code;
  this.name = error.title;
  this.description = vsprintf(options.details || error.details, options.args || []);
}

AppError.prototype.__proto__ = Error.prototype;

module.exports.AppError = AppError;