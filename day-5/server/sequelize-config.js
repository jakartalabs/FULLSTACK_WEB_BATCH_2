require('dotenv').config();
const nodeEnv = process.env.NODE_ENV;
module.exports = {
  [nodeEnv]: {
    username: "db_user",
    password: "fress_market",
    database: "fress_market",
    host: "localhost",
    dialect: "mysql",
    port: 6032
  }
}