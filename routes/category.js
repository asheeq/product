'use strict';

module.exports = (category) => {
  const express = require('express');
  const router = express.Router();

  const vs = require('../validator');
  const validationHandler = require('../middlewares/validation-handler');

  const responseHandler = require('../utils/response-handler');

  router
    .get('/category', function (req, res, next) {
      req.body = req.query;
      next();
    }, validationHandler(vs['FetchCategory']),
    async function (req, res, next) {
      try {
        res.data = await category.fetchCategory(req.body);
        responseHandler(null, req, res);
      } catch (err) {
          responseHandler(err, req, res);
      }
    })
    .post('/category', validationHandler(vs['CreateCategory']),
      async function (req, res, next) {
        try {
          res.data = await productCategory.createCategory(req.body);
          responseHandler(null, req, res);
        } catch (err) {
          responseHandler(err, req, res);
        }
    })
    .put('/category', validationHandler(vs['UpdateCategory']),
      async function (req, res, next) {
        try {
          res.data = await productCategory.updateCategory(req.body);
          responseHandler(null, req, res);
        } catch (err) {
          responseHandler(err, req, res);
        }
    });

  return router;
};