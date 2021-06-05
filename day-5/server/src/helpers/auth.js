require('dotenv').config();
const jsonwebtoken = require('jsonwebtoken');
const validRole = require('./valid-role');
const Users = require('../models/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const { JWT_SECRET } = process.env;

const generateJwt = async (data) => {
  const token = await jsonwebtoken.sign(data, JWT_SECRET, { expiresIn: 60 * 360 });
  return token;
}

const jwtVerify = async (token, secret) => {
  try {
    const jwtData = await jsonwebtoken.verify(token, secret, (err, encoded) => {
      if (err) throw err;
      return encoded;
    });
    if (jwtData) {
      return jwtData;
    }
  } catch (error) { 
    console.log(error);
    return false;
  }
}

const authorize = async (req, res, rbac, next) =>{
  const headers = req.headers.authorization;
  const token = headers.slice(7);
  const jwtValid = await jwtVerify(token, JWT_SECRET);
  
  if (jwtValid){
    await Users.findOne({
      where: {
        email: jwtValid.email,
        token
      },
      raw: true,
      plain: true
    })
    const isRole = await validRole(rbac, jwtValid.role);
    if(isRole){
      req.user = jwtValid;
      return next();
    }
    return res.status(400).json({ message: 'Role is not valid' });
  }
  return res.status(404).json({message: 'Auth not Invalid'});
}

const hashPassword = async (myPlaintextPassword) =>{
  return new Promise((resolve, reject) => bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    console.log(hash);
    if (err) reject(err);
    resolve(hash);
  }))
}

const checkHashPassword = async (myPlaintextPassword, hash) => {
  return bcrypt.compareSync(myPlaintextPassword, hash); // true
}

module.exports = {
  generateJwt,
  authorize,
  hashPassword,
  checkHashPassword
}