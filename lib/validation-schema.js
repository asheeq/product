'use strict';

const path = require('path');

const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

function ValidationSchema() {
  this.importCache = {};
}

ValidationSchema.prototype.import = function (importPath) {
  if(typeof this.importCache[importPath] === 'string') {
    importPath = this.importCache[importPath];
  }

  if(path.normalize(importPath) !== path.resolve(importPath)) {
    // We're relative, and need the calling files location
    const callLoc = path.dirname(Utils.stack()[1].getFileName());

    importPath = path.resolve(callLoc, importPath);
  }

  if(this.importCache[importPath] === 'string' || !this.importCache[importPath]) {
    this.importCache[importPath] = require(importPath)(this, Joi);
  }

  return this.importCache[importPath];
};

ValidationSchema.prototype.define = function (schemaName, schema) {
  return {
    name: schemaName,
    schema: schema
  }
};

module.exports.ValidationSchema = ValidationSchema;