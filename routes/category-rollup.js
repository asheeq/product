'use strict';

module.exports = (categoryRollup) => {
  const express = require('express');
  const router = express.Router();

  const vs = require('../validator');
  const validationHandler = require('../middlewares/validation-handler');

  const responseHandler = require('../utils/response-handler');

  router
    .get('/category/rollup', function (req, res, next) {
      req.body = req.query;
      next();
    }, validationHandler(vs['CategoryRollupFetch']),
    async function (req, res, next) {
      try {
        res.data = await categoryRollup.fetchCategoryRollup(req.body);
        responseHandler(null, req, res);
      } catch (err) {
          responseHandler(err, req, res);
      }
    })
    .post('/category/rollup', validationHandler(vs['CategoryRollupCreate']),
      async function (req, res, next) {
        try {
          res.data = await categoryRollup.createCategoryRollup(req.body);
          responseHandler(null, req, res);
        } catch (err) {
          responseHandler(err, req, res);
        }
    })
    .put('/category/rollup', validationHandler(vs['CategoryRollupUpdate']),
      async function (req, res, next) {
        try {
          res.data = await categoryRollup.updateCategoryRollup(req.body);
          responseHandler(null, req, res);
        } catch (err) {
          responseHandler(err, req, res);
        }
    });

  return router;
};