'use strict';

module.exports = (ValidationSchema, Joi) => {
  return [
    ValidationSchema.define('ProductClassificationFetch', Joi.object().keys({
      id: Joi.number().integer().optional(),
      productId: Joi.number().integer().optional(),
      categoryId: Joi.number().integer().optional(),
      isPrimary: Joi.boolean().optional(),
      fromDate: Joi.date().format('YYYY-MM-DD HH:mm:ss').options({convert: true}).optional(),
      thruDate: Joi.date().format('YYYY-MM-DD HH:mm:ss').min(Joi.ref('fromDate')).options({convert: true}).optional()
    })),
    ValidationSchema.define('ProductClassificationUpdate', Joi.object().keys({
      id: Joi.number().integer().min(1).required(),
      productId: Joi.number().integer().min(1).optional(),
      categoryId: Joi.number().integer().min(1).optional(),
      isPrimary: Joi.boolean().optional(),
      fromDate: Joi.date().format('YYYY-MM-DD HH:mm:ss').options({convert: true}).optional(),
      thruDate: Joi.date().format('YYYY-MM-DD HH:mm:ss').min(Joi.ref('fromDate')).options({convert: true}).optional(),
      updatedBy: Joi.string().max(255).required()
    }).or('productId','categoryId','isPrimary','fromDate','thruDate')),
    ValidationSchema.define('ProductClassificationCreate', Joi.object().keys({
      productId: Joi.number().integer().min(1).required(),
      categoryId: Joi.number().integer().min(1).required(),
      isPrimary: Joi.boolean().optional(),
      fromDate: Joi.date().format('YYYY-MM-DD HH:mm:ss').options({convert: true}).optional(),
      thruDate: Joi.date().format('YYYY-MM-DD HH:mm:ss').min(Joi.ref('fromDate')).options({convert: true}).optional(),
      createdBy: Joi.string().max(255).required()
    }))
  ];
};