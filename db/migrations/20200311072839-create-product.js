'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(1024)
      },
      status: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 1
      },
      introduceAt: {
        field: 'introduce_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      salesDiscontinueAt: {
        field: 'sales_discontinue_at',
        allowNull: true,
        type: Sequelize.DATE
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
        name: {
          fields: [ 'name' ]
        }
      },
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product');
  }
};