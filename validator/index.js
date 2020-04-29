'use strict';

const fs = require('fs');
const path = require('path');

const ValidationSchema = require('../lib/validation-schema').ValidationSchema;

const basename = path.basename(__filename);
const validationSchemaImporter = new ValidationSchema();

const vs = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const schemaObjects = validationSchemaImporter.import(path.join(__dirname, file));
    schemaObjects.forEach((schemaObject) => {
      vs[schemaObject.name] = schemaObject.schema;
    });
  });

module.exports = vs;