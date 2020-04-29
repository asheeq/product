'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product_association', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      type: {
        field: 'type',
        type: Sequelize.ENUM('Component', 'Complement', 'Incompatible'),
        allowNull: false,
        defaultValue: 'Component'
      },
      associatedWith: {
        field: 'associated_with',
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false
      },
      associated: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
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
        association_tuple: {
          fields: [ 'type', 'associated_with', 'associated' ]
        }
      },
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product_association');
  }
};