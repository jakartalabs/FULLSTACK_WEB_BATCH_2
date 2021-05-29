const logger = require('../helpers/logging');
const auth = require('../helpers/auth');
const Users =require('../models/users');

module.exports = {
  login: async (req, res, next) => {
    try {
      const user = await Users.findOne({
        attributes: ['uuid', 'name', 'email'],
        where: {
          email: req.body.email,
          password: req.body.password
        },
        raw: true,
        plain: true
      })
      if(user){
        user.role='user';
        const jwtToken = await auth.generateJwt(user);
        await Users.update({ token: jwtToken }, { where: { email: user.email}});
        return res.status(200).json(jwtToken);
      }
      return res.status(400).json({ message: 'Email/ Passwoord Not Valid'})
    } catch (error) {
      next(error);
    }
  },
  logout: async (req, res, next) => { 
    try {
      console.log(req.user)
      await Users.update({
        token: null,
      }, {
        where: {
          email: req.user.email
        }
      })

      res.send('ok');
    } catch (error) {
      next(error);
    }
  },
  getUser: async (req, res, next) =>{
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