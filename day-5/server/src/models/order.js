const { Model, DataTypes, QueryTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');

class Orders extends Model {
  static associate(models) {

  }
};

Orders.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.BIGINT
  },
  orederUuid: {
    type: DataTypes.UUID
  },
  userId: {
    type: DataTypes.BIGINT
  },
  tax: {
    type: DataTypes.DECIMAL(10,2)
  },
  subtotal: {
    type: DataTypes.DECIMAL(10, 2)
  },
  shipping: {
    type: DataTypes.BIGINT
  },
  shippingAddressId: {
    type: DataTypes.BIGINT
  },
  paymentMethod: {
    type: DataTypes.BIGINT
  },
  status: {
    type: DataTypes.TINYINT
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  },
  deletedAt: {
    type: DataTypes.DATE
  }
}, {
  sequelize: DBCONNECTION,
  timestamps: true,
  underscored: true,
  paranoid: true,
  modelName: 'Orders',
  tableName: 'orders'
});
module.exports = Orders;
