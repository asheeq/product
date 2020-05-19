'use strict';

module.exports = (ValidationSchema, Joi) => {
  return [
    ValidationSchema.define('ProductClassificationFetch', Joi.object().keys({
      id: Joi.number().integer().min(1).optional(),
      productId: Joi.number().integer().min(1).optional(),
      categoryId: Joi.number().integer().min(1).optional(),
      isPrimary: Joi.boolean().optional(),
      startDate: Joi.date().format('YYYY-MM-DD').options({convert: true}).optional(),
      endDate: Joi.date().format('YYYY-MM-DD').min(Joi.ref('startDate')).options({convert: true}).optional(),
      offset: Joi.number().integer().min(0).optional(),
      limit: Joi.number().integer().min(1).optional()
    })),
    ValidationSchema.define('ProductClassificationUpdate', Joi.object().keys({
      id: Joi.number().integer().min(1).required(),
      isPrimary: Joi.boolean().valid(true).optional(),
      fromDate: Joi.date().format('YYYY-MM-DD HH:mm:ss').options({convert: true}).optional(),
      thruDate: Joi.date().format('YYYY-MM-DD HH:mm:ss').min(Joi.ref('fromDate')).options({convert: true}).optional(),
      updatedBy: Joi.string().max(255).required()
    }).or('isPrimary','fromDate','thruDate')),
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