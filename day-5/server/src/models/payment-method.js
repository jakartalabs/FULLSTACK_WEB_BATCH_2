const { Model, DataTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');

class PaymentMethod extends Model {
  static associate(models) {

  }

  static getAll() {
    return PaymentMethod.findAll({
      raw: true
    });
  }

  static _create(data) {
    return PaymentMethod.create(data);
  }
};

PaymentMethod.init({
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
  timestamps: false,
  underscored: true,
  modelName: 'PaymentMethod',
  tableName: 'payment_method'
});


module.exports = PaymentMethod;
