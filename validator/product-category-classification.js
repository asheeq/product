'use strict';

module.exports = (ValidationSchema, Joi) => {
  return [
    ValidationSchema.define('ProductClassificationFetch', Joi.object().keys({
      id: Joi.number().integer().max(20).optional(),
      productId: Joi.number().integer().max(20).optional(),
      categoryId: Joi.number().integer().max(20).optional(),
      isPrimary: Joi.number().integer().valid(0, 1).optional()
    })),
    ValidationSchema.define('ProductClassificationUpdate', Joi.object().keys({
      id: Joi.number().integer().max(20).optional(),
      productId: Joi.number().integer().max(20).required(),
      categoryId: Joi.number().integer().max(20).required(),
      isPrimary: Joi.number().integer().valid(0, 1).required(),
      updatedBy: Joi.string().max(255).required()
    })),
    ValidationSchema.define('ProductClassificationCreate', Joi.object().keys({
      id: Joi.number().integer().max(20).optional(),
      productId: Joi.number().integer().max(20).required(),
      categoryId: Joi.number().integer().max(20).required(),
      isPrimary: Joi.number().integer().valid(0, 1).required(),
      createdBy: Joi.string().max(255).required()
    }))
  ];
};