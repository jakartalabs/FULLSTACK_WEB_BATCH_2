const Sequelize = require('sequelize');

const DBCONNECTION = new Sequelize({
  username: "db_user",
  password: "fresh_market",
  database: "fresh_market",
  host: "localhost",
  dialect: "mysql",
  port: 6034
});

module.exports = DBCONNECTION;