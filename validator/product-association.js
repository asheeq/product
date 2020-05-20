'use strict';

module.exports = (ValidationSchema, Joi) => {
  return [
    ValidationSchema.define('ProductAssociationFetch', Joi.object().keys({
      id: Joi.number().integer().min(1).optional(),
      type: Joi.string().valid('Component', 'Complement', 'Incompatible').optional(),
      associatedWith: Joi.number().integer().min(1).optional(),
      associated: Joi.number().integer().min(1).optional(),
      startDate: Joi.date().format('YYYY-MM-DD').options({convert: true}).optional(),
      endDate: Joi.date().format('YYYY-MM-DD').min(Joi.ref('startDate')).options({convert: true}).optional(),
      offset: Joi.number().integer().min(0).optional(),
      limit: Joi.number().integer().min(1).optional()
    })),
    ValidationSchema.define('ProductAssociationUpdate', Joi.object().keys({
      id: Joi.number().integer().min(1).required(),
      type: Joi.string().valid('Component', 'Complement', 'Incompatible').optional(),
      quantity: Joi.number().integer().min(1).optional(),
      fromDate: Joi.date().format('YYYY-MM-DD HH:mm:ss').options({convert: true}).optional(),
      thruDate: Joi.date().format('YYYY-MM-DD HH:mm:ss').min(Joi.ref('fromDate')).options({convert: true}).optional(),
      updatedBy: Joi.string().max(255).required()
    }).or('type','quantity','fromDate','thruDate')),
    ValidationSchema.define('ProductAssociationCreate', Joi.object().keys({
      quantity: Joi.number().integer().min(1).optional(),
      type: Joi.string().valid('Component', 'Complement', 'Incompatible').optional(),
      associatedWith: Joi.number().integer().min(1).required(),
      associated: Joi.number().integer().min(1).disallow(Joi.ref('associatedWith')).required(),
      fromDate: Joi.date().format('YYYY-MM-DD HH:mm:ss').options({convert: true}).optional(),
      thruDate: Joi.date().format('YYYY-MM-DD HH:mm:ss').min(Joi.ref('fromDate')).options({convert: true}).optional(),
      createdBy: Joi.string().max(255).required()
    }))
  ];
};