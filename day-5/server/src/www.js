require('dotenv').config();
const http = require('http');
const app = require('./app');
const { Op } = require("sequelize");

const DBCONNECTION = require('./configs/db');
const Address = require('./models/address')

const server = http.createServer(app);

const PORT = process.env.PORT || 3010;

server.listen(PORT);
server.on('err', (err)=>{ console.log(err) });
server.on('listening', async()=>{
  try {
    await DBCONNECTION.authenticate();

    const dataAddress = {
      address: ' Jalan Palmerah Raya NO 34 RT/RW : 08/01',
      userId: 1,
      provinceName: 'Jakarta',
      city: 'Jakarta Barat',
      subDistrict: 'Palmerah',
      postalCode: '23410'
    }
    // await Address.create(dataAddress);
    // const address = await Address.findAll({
    //   where: {
    //     address: {
    //       [Op.not]: null,
    //     },
    //     postalCode: '23410'
    //   },
    //   attributes: { exclude: ['userId']},
    //   raw: true
    // });
    const address = await Address.get();

    // Logging address data
    console.log(address);

  } catch (error) {
    console.log(ererrorr)
  }
  console.log('Server ready')
});

