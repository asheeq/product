'use strict';

module.exports = (ValidationSchema, Joi) => {
  return [
    ValidationSchema.define('ProductFetch', Joi.object().keys({
      name: Joi.string().max(255).optional()
    })),
    ValidationSchema.define('ProductUpdate', Joi.object().keys({
      name: Joi.string().max(255).required(),
      description: Joi.string().max(1024).optional(),
      status: Joi.number().integer().valid(0, 1).optional(),
      updatedBy: Joi.string().max(255).required(),
      salesDiscontinueAt: Joi.date().format('YYYY-MM-DD').options({convert: true}).optional()
    })),
    ValidationSchema.define('ProductCreate', Joi.object().keys({
      name: Joi.string().max(255).required(),
      description: Joi.string().max(1024).optional(),
      introduceAt: Joi.date().format('YYYY-MM-DD').options({convert: true}).optional(),
      createdBy: Joi.string().max(255).required()
    }))
  ];
};