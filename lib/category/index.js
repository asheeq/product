'use strict';

module.exports = (db) => {
  return require('./category-controller')(
    require('./category-service')(db)
  );
};