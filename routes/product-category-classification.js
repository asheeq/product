'use strict';

module.exports = (productCategoryClassification) => {
  const express = require('express');
  const router = express.Router();

  const vs = require('../validator');
  const validationHandler = require('../middlewares/validation-handler');

  const responseHandler = require('../utils/response-handler');

  router
    .get('/products/classification', function (req, res, next) {
      req.body = req.query;
      next();
    }, validationHandler(vs['ProductClassificationFetch']),
    async function (req, res) {
      try {
        res.data = await productCategoryClassification.fetchProductClassification(req.body);
        responseHandler(null, req, res);
      } catch (err) {
        responseHandler(err, req, res);
      }
    })
    .post('/products/classification', validationHandler(vs['ProductClassificationCreate']),
      async function (req, res) {
        try {
          res.data = await productCategoryClassification.createProductClassification(req.body);
          responseHandler(null, req, res);
        } catch (err) {
          responseHandler(err, req, res);
        }
      })
    .put('/products/classification', validationHandler(vs['ProductClassificationUpdate']),
      async function (req, res) {
        try {
          res.data = await productCategoryClassification.updateProductClassification(req.body);
          responseHandler(null, req, res);
        } catch (err) {
          responseHandler(err, req, res);
        }
      });

  return router;
};