'use strict';

module.exports = (ValidationSchema, Joi) => {
  return [
    ValidationSchema.define('CategoryRollupFetch', Joi.object().keys({
      id: Joi.number().integer().optional(),
      partOf: Joi.number().integer().optional(),
      madeUpOf: Joi.number().integer().optional()
    })),
    ValidationSchema.define('CategoryRollupUpdate', Joi.object().keys({
      id: Joi.number().integer().required(),
      partOf: Joi.number().integer().optional(),
      madeUpOf: Joi.number().integer().optional(),
      status: Joi.number().integer().valid(0, 1).optional(),
      updatedBy: Joi.string().max(255).required()
    }).or('partOf','madeUpOf','status')),
    ValidationSchema.define('CategoryRollupCreate', Joi.object().keys({
      partOf: Joi.number().integer().required(),
      madeUpOf: Joi.number().integer().required(),
      createdBy: Joi.string().max(255).required()
    }))
  ];
};