'use strict';

module.exports = (ValidationSchema, Joi) => {
  return [
    ValidationSchema.define('ProductAssociationFetch', Joi.object().keys({
      id: Joi.number().integer().optional(),
      type: Joi.string().valid('Component', 'Complement', 'Incompatible').optional(),
      associatedWith: Joi.number().integer().optional(),
      associated: Joi.number().integer().optional(),
      quantity: Joi.number().integer().optional()
    })),
    ValidationSchema.define('ProductAssociationUpdate', Joi.object().keys({
      id: Joi.number().integer().required(),
      quantity: Joi.number().integer().optional(),
      associatedWith: Joi.number().integer().required(),
      associated: Joi.number().integer().required(),
      updatedBy: Joi.string().max(255).required()
    })),
    ValidationSchema.define('ProductAssociationCreate', Joi.object().keys({
      quantity: Joi.number().integer().optional(),
      type: Joi.string().valid('Component', 'Complement', 'Incompatible').required(),
      associatedWith: Joi.number().integer().required(),
      associated: Joi.number().integer().required(),
      fromDate: Joi.date().format('YYYY-MM-DD').options({convert: true}).optional(),
      thruDate: Joi.date().format('YYYY-MM-DD').options({convert: true}).optional(),
      createdBy: Joi.string().max(255).required()
    }))
  ];
};