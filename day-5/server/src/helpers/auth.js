require('dotenv').config();
const jsonwebtoken = require('jsonwebtoken');
const validRole = require('./valid-role');
const Users = require('../models/users');


const { JWT_SECRET } = process.env;

const generateJwt = async (data) => {
  const token = await jsonwebtoken.sign(data, JWT_SECRET, { expiresIn: 60 * 360 });
  return token;
}

const jwtVerify = async (token, secret) => {
  const jwtData = await jsonwebtoken.verify(token, secret);
  if (jwtData) {
    console.log(jwtData)
    return jwtData;
  }
  return false;
}

const authorize = async (req, res, rbac, next) =>{
  const headers = req.headers.authorization;
  const token = headers.slice(7);
  const jwtValid = await jwtVerify(token, JWT_SECRET);
  
  const user = await Users.findOne({
    where: {
      email: jwtValid.email,
      token
    },
    raw: true,
    plain: true
  })

  if (jwtValid && user){
    const isRole = await validRole(rbac, jwtValid.role);
    if(isRole){
      req.user = jwtValid;
      next();
    }
    return res.status(400).json({ message: 'Role is not valid' });
  }
  return res.status(404).json({message: 'Auth not Invalid'});
}

module.exports = {
  generateJwt,
  authorize
}