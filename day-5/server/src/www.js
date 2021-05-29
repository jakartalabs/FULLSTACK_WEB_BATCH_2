require('dotenv').config();
const http = require('http');
const {app, rbac} = require('./app');
const { Op } = require("sequelize");
const logger = require('./helpers/logging');

// const DBCONNECTION = require('./configs/db');
const Address = require('./models/address')

const server = http.createServer(app);

const PORT = process.env.PORT || 3010;

server.listen(PORT);
server.on('err', (err)=>{ console.log(err) });
server.on('listening', async()=>{
  try {
    await rbac.init();
    // await DBCONNECTION.authenticate();
  } catch (error) {
    console.log(error)
  }
  logger.info('Server ready');
});

