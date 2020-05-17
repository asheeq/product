'use strict';

module.exports = (db) => {
  return require('./product-category-classification-controller')(
    require('./product-category-classification-service')(db),
    require('../product')(db),
    require('../category')(db)
  );
};
