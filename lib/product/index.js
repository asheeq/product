'use strict';

module.exports = (db) => {
  return require('./product-controller')(
    require('./product-service')(db)
  );
};