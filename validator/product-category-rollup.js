'use strict';

module.exports = (ValidationSchema, Joi) => {
  return [
    ValidationSchema.define('CategoryRollupFetch', Joi.object().keys({
      id: Joi.number().integer().max(20).optional(),
      partOf: Joi.number().integer().max(20).optional(),
      madeOf: Joi.number().integer().max(20).optional(),
      status: Joi.number().integer().valid(0, 1).optional()
    })),
    ValidationSchema.define('CategoryRollupUpdate', Joi.object().keys({
      id: Joi.number().integer().max(20).required(),
      partOf: Joi.number().integer().max(20).optional(),
      madeOf: Joi.number().integer().max(20).optional(),
      status: Joi.number().integer().valid(0, 1).optional(),
      updatedBy: Joi.string().max(255).required()
    })),
    ValidationSchema.define('CategoryRollupCreate', Joi.object().keys({
      id: Joi.number().integer().max(20).required(),
      partOf: Joi.number().integer().max(20).required(),
      madeOf: Joi.number().integer().max(20).required(),
      status: Joi.number().integer().valid(0, 1).required(),
      createdBy: Joi.string().max(255).required()
    }))
  ];
};