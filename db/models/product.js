'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
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
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    introduceAt: {
      type: DataTypes.DATE,
      field: 'introduce_at',
      allowNull: false
      },
    salesDiscontinueAt:{
      type: DataTypes.DATE,
      field: 'sales_discontinue_at'
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
    tableName: 'product'
  });

  Product.associate = function(models) {
    Product.hasMany(models['ProductAssociation']);
  };

  return Product;
};