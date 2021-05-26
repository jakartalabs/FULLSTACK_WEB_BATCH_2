const { Model, DataTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');

class Category extends Model {
  static associate(models) {

  }
};

Category.init({
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
  timestamps: false,
  underscored: true,
  modelName: 'Category',
  tableName: 'category'
});
module.exports = Category;
