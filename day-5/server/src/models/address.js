const { Model, DataTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');
// const t = await sequelize.transaction();

class Address extends Model {
  static associate(models){

  }

  static getAll(userId) {
    return Address.findAll({
      where: {
        userId
      },
      raw: true
    });
  }

  static _create(data) {
    return Address.create(data);
  }
};

Address.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.BIGINT
  },
  userId: {
    type: DataTypes.BIGINT
  },
  provinceName: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  subDistrict: {
    type: DataTypes.STRING
  },
  postalCode: {
    type: DataTypes.STRING
  },
  detailAddress: {
    type: DataTypes.TEXT
  },
  isSelected: {
    type: DataTypes.BOOLEAN
  }
},{
  sequelize: DBCONNECTION,
  timestamps: false,
  underscored: true,
  modelName: 'Address',
  tableName: 'address'
});
module.exports = Address;
