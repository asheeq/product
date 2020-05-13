'use strict';

module.exports = (db) => {
  return require('./category-rollup-controller')(
    require('./category-rollup-service')(db),
    require('../category')(db)
  );
};