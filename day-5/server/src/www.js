require('dotenv').config();
const http = require('http');
const app = require('./app');
const { Op } = require("sequelize");

// const DBCONNECTION = require('./configs/db');
const Address = require('./models/address')

const server = http.createServer(app);

const PORT = process.env.PORT || 3010;

server.listen(PORT);
server.on('err', (err)=>{ console.log(err) });
server.on('listening', async()=>{
  try {
    // await DBCONNECTION.authenticate();
  } catch (error) {
    console.log(error)
  }
  console.log('Server ready')
});

