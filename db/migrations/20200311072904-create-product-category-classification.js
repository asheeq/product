'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product_category_classification', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      categoryId: {
        field: 'category_id',
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false
      },
      productId: {
        field: 'product_id',
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false
      },
      fromDate: {
        field: 'from_date',
        allowNull: false,
        type: Sequelize.DATE
      },
      thruDate: {
        field: 'thru_date',
        allowNull: false,
        type: Sequelize.DATE
      },
      isPrimary: {
        field: 'is_primary',
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 1
      },
      createdBy: {
        field: 'created_by',
        type: Sequelize.STRING,
        allowNull: false
      },
      updatedBy: {
        field: 'updated_by',
        type: Sequelize.STRING
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE
      }
    }, {
      uniqueKeys: {
        classification_pair: {
          fields: [ 'category_id', 'product_id' ]
        }
      },
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product_category_classification');
  }
};