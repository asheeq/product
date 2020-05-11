'use strict';

module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('ProductCategory', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
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
  };

  return ProductCategory;
};