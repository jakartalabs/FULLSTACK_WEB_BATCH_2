const { Op } = require("sequelize");
const logger = require('../helpers/logging');
const auth = require('../helpers/auth');
const Users =require('../models/users');
const { v4 } = require('uuid');

module.exports = {
  login: async (req, res, next) => {
    try {
      const user = await Users.findOne({
        attributes: ['uuid', 'name', 'email', 'password'],
        where: {
          [Op.or]: [{ email: req.body.email||'' }, { phone: req.body.phone||''}]
        },
        raw: true,
        plain: true
      })
      if(user){
        const validPassword = await auth.checkHashPassword(req.body.password,user.password);
        if(validPassword){
          user.role='user';
          delete user.password;
          const jwtToken = await auth.generateJwt(user);
          await Users.update({ token: jwtToken }, { where: { email: user.email}});
          return res.status(200).json(jwtToken);
        }
      }
      return res.status(400).json({ message: 'Email/ Passwoord Not Valid'})
    } catch (error) {
      next(error);
    }
  },
  logout: async (req, res, next) => { 
    try {
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
  createUser: async(req, res, next) => {
    try {
      const { name, email, phone, password } = req.body;
      const userFind = await Users.findOne({ 
        where: {
          [Op.or]: [{ email }, { phone }],
        }
      })
      if(userFind){
        return res.status(400).send('User Alredy Existing'); 
      }
      const hashPassword = await auth.hashPassword(password);
      const created= await Users._create({
        uuid: v4(),
        name, 
        email,
        phone,
        password: hashPassword,
        status: 1,
      })
      if(created){
        return res.status(201).end();
      }
      return res.status(400).json({ message: 'Failed to create user'});
    } catch (error) {
      next(error);
    }
  }
}