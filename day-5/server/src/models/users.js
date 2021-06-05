const { Model, DataTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');
// const t = await sequelize.transaction();

class Users extends Model {
  static associate(models) {

  }
  static _create(data) {
    return Users.create(data);
  }
};

Users.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.BIGINT
  },
  uuid: {
    type: DataTypes.STRING,
    field: 'user_uuid',
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.TINYINT
  },
  token: {
    type: DataTypes.TEXT,
    allowNull: true
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
  modelName: 'Users',
  tableName: 'users'
});
module.exports = Users;
