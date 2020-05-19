'use strict';

module.exports = (productAssociation) => {
  const express = require('express');
  const router = express.Router();

  const vs = require('../validator');
  const validationHandler = require('../middlewares/validation-handler');

  const responseHandler = require('../utils/response-handler');

  router
    .get('/products/association', function (req, res, next) {
      req.body = req.query;
      next();
    }, validationHandler(vs['ProductAssociationFetch']),
    async function (req, res) {
      try {
        res.data = await productAssociation.fetchProductAssociation(req.body);
        responseHandler(null, req, res);
      } catch (err) {
        responseHandler(err, req, res);
      }
    })
    .post('/products/association', validationHandler(vs['ProductAssociationCreate']),
      async function (req, res) {
        try {
          res.data = await productAssociation.createProductAssociation(req.body);
          responseHandler(null, req, res);
        } catch (err) {
          responseHandler(err, req, res);
        }
      })
    .put('/products/association', validationHandler(vs['ProductAssociationUpdate']),
      async function (req, res) {
        try {
          res.data = await productAssociation.updateProductAssociation(req.body);
          responseHandler(null, req, res);
        } catch (err) {
          responseHandler(err, req, res);
        }
      });
  return router;
};