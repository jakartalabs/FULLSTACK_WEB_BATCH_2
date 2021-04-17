require('dotenv').config();
const http = require('http');
const app = require('./app');

const DBCONNECTION = require('./configs/db');
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT);
server.on('err', (err)=>{ console.log(err) });
server.on('listening', async()=>{
  try {
    await DBCONNECTION.authenticate();
  } catch (error) {
    console.log(ererrorr)
  }
  console.log('Server ready')
});

