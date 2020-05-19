'use strict';

module.exports = (ValidationSchema, Joi) => {
  return [
    ValidationSchema.define('ProductFetch', Joi.object().keys({
      id: Joi.number().integer().min(1).optional(),
      name: Joi.string().max(255).optional(),
      startDate: Joi.date().format('YYYY-MM-DD').options({convert: true}).optional(),
      endDate: Joi.date().format('YYYY-MM-DD').min(Joi.ref('startDate')).options({convert: true}).optional(),
      offset: Joi.number().integer().min(0).optional(),
      limit: Joi.number().integer().min(1).optional()
    })),
    ValidationSchema.define('ProductUpdate', Joi.object().keys({
      id: Joi.number().integer().min(1).required(),
      name: Joi.string().max(255).optional(),
      description: Joi.string().max(1024).optional(),
      status: Joi.number().integer().valid(0, 1).optional(),
      salesDiscontinueAt: Joi.date().format('YYYY-MM-DD HH:mm:ss').options({convert: true}).optional(),
      updatedBy: Joi.string().max(255).required()
    }).or('name','status','description','salesDiscontinueAt')),
    ValidationSchema.define('ProductCreate', Joi.object().keys({
      name: Joi.string().max(255).required(),
      description: Joi.string().max(1024).optional(),
      introduceAt: Joi.date().format('YYYY-MM-DD HH:mm:ss').options({convert: true}).optional(),
      salesDiscontinueAt: Joi.date().format('YYYY-MM-DD HH:mm:ss').options({convert: true}).optional(),
      createdBy: Joi.string().max(255).required()
    }))
  ];
};