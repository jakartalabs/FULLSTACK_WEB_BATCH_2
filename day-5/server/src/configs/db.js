const Sequelize = require('sequelize');

const DBCONNECTION = new Sequelize({
  username: "db_user",
  password: "fress_market",
  database: "fress_market",
  host: "localhost",
  dialect: "mysql",
  port: 6032
});

module.exports = DBCONNECTION;