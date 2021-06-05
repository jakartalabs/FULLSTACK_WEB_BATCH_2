const { Model, DataTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');

class ShippingCategory extends Model {
  static associate(models) {

  }

  static getAll() {
    return ShippingCategory.findAll({
      where: {
        status: 1
      },
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
  status: {
    type: DataTypes.TINYINT
  },
}, {
  sequelize: DBCONNECTION,
  underscored: true,
  timestamps: false,
  modelName: 'ShippingCategory',
  tableName: 'shipping_category'
});


module.exports = ShippingCategory;
