'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product_category_rollup', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      partOf: {
        field: 'part_of',
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false
      },
      madeUpOf: {
        field: 'made_up_of',
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false
      },
      status: {
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
        rollup_pair: {
          fields: [ 'part_of', 'made_up_of' ]
        }
      },
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('product_category_rollup');
  }
};