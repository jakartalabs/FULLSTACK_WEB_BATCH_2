const logger = require('../helpers/logging');



module.exports = {
  getUser: (req, res, next) =>{
    try {
      logger.info('get data');
      const data = {
        name: 'julio',
        job: 'fullstack'
      }
     
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  },
  createUser: (req, res, next) => {
    try {
      const { name, job } = req.body;
      if(req.body.maritalStatus){
        console.log(name);
        console.log(job);
        res.status(201).send('Created');
      }else{
        res.status(400).send('Data body harus ada');
      }
    } catch (error) {
      next(error);
    }
  }
}