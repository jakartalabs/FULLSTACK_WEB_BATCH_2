const { Model, DataTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');
const Product = require('./product');

class Category extends Model {
  static associate(models) {

  }

  static getAll() {
    return Category.findAll({
      raw: true
    });
  }

  static _create(data) {
    return Category.create(data);
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
  timestamps: true,
  underscored: true,
  paranoid: true,
  modelName: 'Category',
  tableName: 'category'
});


Category.hasMany(Product, {as: 'product', foreignKey: 'categoryId'});
Product.belongsTo(Category, { foreignKey: 'categoryId'});
module.exports = Category;
