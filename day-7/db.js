const Sequelize = require('sequelize');

const DBCONNECTION = new Sequelize({
  "username": "db_user",
  "password": "db_user_pass",
  "database": "app_db",
  "host": "localhost",
  "dialect": "mysql",
  "port": 6033
});

module.exports = DBCONNECTION;