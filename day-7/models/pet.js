'use strict';
const { Model, DataTypes } = require('sequelize');
const DBCONNECTION = require('../db')

class Pet extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};
Pet.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING(20)
  },
}, {
  sequelize: DBCONNECTION,
  timestamps: false,
  paranoid: false,
  underscored: true,
  modelName: 'Pet',
  tableName: 'pet'
});

module.exports = Pet;
