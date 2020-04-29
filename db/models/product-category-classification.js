'use strict';

module.exports = (sequelize, DataTypes) => {
  const ProductCategoryClassification = sequelize.define('ProductCategoryClassification', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    categoryId: {
      type: DataTypes.BIGINT.UNSIGNED,
      field: 'category_id',
      allowNull: false
    },
    productId: {
      type: DataTypes.BIGINT.UNSIGNED,
      field: 'product_id',
      allowNull: false
    },
    fromDate: {
      type: DataTypes.DATE,
      field: 'from_date',
      allowNull: false
    },
    thruDate: {
      type: DataTypes.DATE,
      field: 'thru_date',
      allowNull: false
    },
    isPrimary: {
      type: DataTypes.TINYINT,
      field: 'is_primary',
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
    tableName: 'product_category_classification'
  });

  ProductCategoryClassification.associate = function(models) {
    ProductCategoryClassification.belongsTo(models['Product'], { foreignKey: 'productId'});
    ProductCategoryClassification.belongsTo(models['ProductCategory'],{foreignKey: 'categoryId'});
  };

  return ProductCategoryClassification;
};