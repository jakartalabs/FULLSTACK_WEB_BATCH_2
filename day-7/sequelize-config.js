require('dotenv').config();
const nodeEnv = process.env.NODE_ENV;
module.exports = {
  [nodeEnv]: {
    "username": "db_user",
    "password": "db_user_pass",
    "database": "app_db",
    "host": "localhost",
    "dialect": "mysql",
    "port": 6033
  }
}