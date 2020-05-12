'use strict';

module.exports = (category) => {
  const express = require('express');
  const router = express.Router();

  const vs = require('../validator');
  const validationHandler = require('../middlewares/validation-handler');

  const responseHandler = require('../utils/response-handler');

  router
    .get('/categories', function (req, res, next) {
      req.body = req.query;
      next();
    }, validationHandler(vs['CategoryFetch']),
    async function (req, res) {
      try {
        res.data = await category.fetchCategories(req.body);
        responseHandler(null, req, res);
      } catch (err) {
        responseHandler(err, req, res);
      }
    })
    .post('/categories', validationHandler(vs['CategoryCreate']),
      async function (req, res) {
        try {
          res.data = await category.createCategory(req.body);
          responseHandler(null, req, res);
        } catch (err) {
          responseHandler(err, req, res);
        }
      })
    .put('/categories', validationHandler(vs['CategoryUpdate']),
      async function (req, res) {
        try {
          res.data = await category.updateCategory(req.body);
          responseHandler(null, req, res);
        } catch (err) {
          responseHandler(err, req, res);
        }
      });

  return router;
};