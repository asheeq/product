'use strict';

module.exports = (sequelize, DataTypes) => {
  const ProductAssociation = sequelize.define('ProductAssociation', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    type: {
      type: DataTypes.ENUM('Component', 'Complement', 'Incompatible'),
      allowNull: false,
      defaultValue: 'Component'
    },
    associatedWith: {
      type: DataTypes.BIGINT.UNSIGNED,
      field: 'associated_with',
      allowNull: false
    },
    associated: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
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
    tableName: 'product_association'
  });

  ProductAssociation.associate = function(models) {
    ProductAssociation.belongsTo(models['Product'], { foreignKey: 'associated' });
    ProductAssociation.belongsTo(models['Product'], { foreignKey: 'associatedWith' });
  };

  return ProductAssociation;
};