'use strict';

module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('ProductCategory', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(1024)
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
    tableName: 'product_category'
  });

  ProductCategory.associate = function(models) {
    ProductCategory.hasMany(models['ProductCategoryRollup']);
  };

  return ProductCategory;
};