const { Model, DataTypes, QueryTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');

class OrderDetail extends Model {
  static associate(models) {

  }
};

OrderDetail.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.BIGINT
  },
  orderId: {
    type: DataTypes.BIGINT
  },
  productId: {
    type: DataTypes.BIGINT
  },
  price: {
    type: DataTypes.DECIMAL(10, 2)
  },
  discount: {
    type: DataTypes.DECIMAL(10, 2)
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  quantityType: {
    type: DataTypes.STRING
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
  modelName: 'OrderDetail',
  tableName: 'order_details'
});
module.exports = OrderDetail;
