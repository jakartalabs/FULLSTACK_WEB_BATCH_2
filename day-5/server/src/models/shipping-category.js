const { Model, DataTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');

class ShippingCategory extends Model {
  static associate(models) {

  }

  static getAll() {
    return ShippingCategory.findAll({
      raw: true
    });
  }

  static _create(data) {
    return ShippingCategory.create(data);
  }
};

ShippingCategory.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.BIGINT
  },
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.TINYINT
  },
}, {
  sequelize: DBCONNECTION,
  underscored: true,
  modelName: 'ShippingCategory',
  tableName: 'shipping_category'
});


module.exports = ShippingCategory;
