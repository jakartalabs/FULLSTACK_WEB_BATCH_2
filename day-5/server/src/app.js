const express = require('express');
const bodyParser = require('body-parser');
const { v4 } = require('uuid');
const { RBAC } = require('rbac');
const login = require('./routes/login');
const register = require('./routes/register');
const api = require('./routes/api-v1');
const logger = require('./helpers/logging');
const {authorize} = require('./helpers/auth');

const app = express();
const rbac = new RBAC({
  roles: ['admin', 'user'],
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(async (req, res, next)=>{
  const request_id = v4();
  console.log(req.path);
  res.setHeader('Request-Id', request_id);
  logger.debug(JSON.stringify({ request_id }));
  logger.info(JSON.stringify(req.headers));
  next();
})

app.use('/register', register);
app.use('/auth', (req, res, next) => { req.path === '/login' || req.path === '/register' ? next() : authorize(req, res, rbac, next)}, login);
// app.use('/v1', (req, res, next) => authorize(req, res, rbac, next), api);
app.use('/v1', api);

module.exports = {app, rbac};
