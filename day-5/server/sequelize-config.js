require('dotenv').config();
const nodeEnv = process.env.NODE_ENV;
module.exports = {
  [nodeEnv]: {
    username: "db_user",
    password: "fresh_market",
    database: "fresh_market",
    host: "localhost",
    dialect: "mysql",
    port: 6034
  }
}