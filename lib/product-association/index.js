'use strict';

module.exports = (db) => {
  return require('./product-association-controller')(
    require('./product-association-service')(db),
    require('../product')(db)
  );
};