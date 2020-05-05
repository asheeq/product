'use strict';

module.exports = (ValidationSchema, Joi) => {
  return [
    ValidationSchema.define('CategoryFetch', Joi.object().keys({
      id: Joi.number().integer().max(20).optional(),
      name: Joi.string().max(255).optional(),
      description: Joi.string().max(1024).optional()
    })),
    ValidationSchema.define('CategoryUpdate', Joi.object().keys({
      id: Joi.number().integer().max(20).required(),
      name: Joi.string().max(255).optional(),
      description: Joi.string().max(1024).optional(),
      updatedBy: Joi.string().max(255).required()
    })),
    ValidationSchema.define('CategoryCreate', Joi.object().keys({
      id: Joi.number().integer().max(20).required(),
      name: Joi.string().max(255).required(),
      description: Joi.string().max(1024).optional(),
      createdBy: Joi.string().max(255).required()
    }))
  ];
};