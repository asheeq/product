'use strict';

module.exports = (queryInterface) => {
  if (!queryInterface
    || queryInterface.constructor.name !== 'QueryInterface'
    || !queryInterface.hasOwnProperty('QueryGenerator')
    || queryInterface['QueryGenerator'].constructor.name !== 'MySQLQueryGenerator') {
    throw new Error('queryInterface need to be a valid QueryInterface instance');
  }

  queryInterface.executeRawQuery = (sql, options) => {
    options = options || {};

    if (sql) {
      return queryInterface.sequelize.query(sql, options);
    }
    return Promise.resolve();
  };

  return queryInterface;
};