'use strict';

module.exports = async () => {
  const express = require('express');
  const path = require('path');
  const cookieParser = require('cookie-parser');
  const logger = require('morgan');

  const app = express();

  process.env.NODE_ENV === 'production' || app.use(logger('dev'));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  const db = require('./db/models');

  app.use('/api',

  );

  return app;
};
