'use strict';

module.exports = (product) => {
  const express = require('express');
  const router = express.Router();

  const vs = require('../validator');
  const validationHandler = require('../middlewares/validation-handler');

  const responseHandler = require('../utils/response-handler');

  router
    .get('/products', function (req, res, next) {
      req.body = req.query;
      next();
    }, validationHandler(vs['ProductFetch']),
    async function (req, res) {
      try {
        res.data = await product.fetchProducts(req.body);
        responseHandler(null, req, res);
      } catch (err) {
        responseHandler(err, req, res);
      }
    })
    .post('/products', validationHandler(vs['ProductCreate']),
      async function (req, res) {
        try {
          res.data = await product.createProduct(req.body);
          responseHandler(null, req, res);
        } catch (err) {
          responseHandler(err, req, res);
        }
      })
    .put('/products', validationHandler(vs['ProductUpdate']),
      async function (req, res) {
        try {
          res.data = await product.updateProduct(req.body);
          responseHandler(null, req, res);
        } catch (err) {
          responseHandler(err, req, res);
        }
      });
  return router;
};