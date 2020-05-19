'use strict';

module.exports = async () => {
  const express = require('express');
  //const path = require('path');
  const cookieParser = require('cookie-parser');
  const logger = require('morgan');

  const app = express();

  process.env.NODE_ENV === 'production' || app.use(logger('dev'));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  const db = require('./db/models');
  const categoryService = require('./lib/category')(db);
  const categoryRollupService = require('./lib/category-rollup')(db,categoryService);
  const productService = require('./lib/product')(db);
  const productClassificationService = require('./lib/product-category-classification')(db,productService,categoryService);
  const productAssociationService = require('./lib/product-association')(db,productService);

  app.use('/api',
    require('./routes/category')(categoryService),
    require('./routes/category-rollup')(categoryRollupService),
    require('./routes/product')(productService),
    require('./routes/product-category-classification')(productClassificationService),
    require('./routes/product-association')(productAssociationService)
  );

  return app;
};
