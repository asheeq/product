'use strict';

module.exports = (sequelize, DataTypes) => {
  const ProductCategoryRollup = sequelize.define('ProductCategoryRollup', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    partOf: {
      type: DataTypes.BIGINT.UNSIGNED,
      field: 'part_of',
      allowNull: false
    },
    madeUpOf:{
      type: DataTypes.BIGINT.UNSIGNED,
      field: 'made_up_of',
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    createdBy: {
      field: 'created_by',
      type: DataTypes.STRING,
      allowNull: false
    },
    updatedBy: {
      field: 'updated_by',
      type: DataTypes.STRING
    }
  }, {
    tableName: 'product_category_rollup'
  });

  ProductCategoryRollup.associate = function(models) {
    ProductCategoryRollup.belongsTo(models['ProductCategory'], { foreignKey: 'madeUpOf'});
    ProductCategoryRollup.belongsTo(models['ProductCategory'], { foreignKey: 'partOf'});
  };

  return ProductCategoryRollup;
};