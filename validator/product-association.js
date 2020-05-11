'use strict';

module.exports = (ValidationSchema, Joi) => {
  return [
    ValidationSchema.define('ProductAssociationFetch', Joi.object().keys({
      id: Joi.number().integer().max(20).optional(),
      type: Joi.string().valid('Component', 'Complement', 'Incompatible').optional(),
      associatedWith: Joi.number().integer().max(20).optional(),
      associated: Joi.number().integer().max(20).optional(),
      quantity: Joi.number().integer().max(11).optional()
    })),
    ValidationSchema.define('ProductAssociationUpdate', Joi.object().keys({
      id: Joi.number().integer().max(20).required(),
      quantity: Joi.number().integer().max(11).optional(),
      associatedWith: Joi.number().integer().max(20).optional(),
      associated: Joi.number().integer().max(20).optional(),
      updatedBy: Joi.string().max(255).required()
    })),
    ValidationSchema.define('ProductAssociationCreate', Joi.object().keys({
      id: Joi.number().integer().max(20).required(),
      type: Joi.string().valid('Component', 'Complement', 'Incompatible').required(),
      associatedWith: Joi.number().integer().max(20).required(),
      associated: Joi.number().integer().max(20).required(),
      fromDate: Joi.date().format('YYYY-MM-DD').options({convert: true}).optional(),
      thruDate: Joi.date().format('YYYY-MM-DD').options({convert: true}).optional(),
      createdBy: Joi.string().max(255).required()
    }))
  ];
};