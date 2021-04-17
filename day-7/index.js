const express = require('express')
const DBCONNECTION = require('./db')
const Pet = require('./models/pet')
const app = express()


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, async () => {
  try{
    await DBCONNECTION.authenticate();
    const pets = await Pet.findAll({
      where: {
        id:1
      },
      raw: true,
      plain: true
    });
    console.log(pets);
  } catch(err){
    console.log(err);
  }
  console.log('Server ready')
})