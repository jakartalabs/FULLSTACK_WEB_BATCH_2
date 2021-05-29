const express = require('express');
const bodyParser = require('body-parser');
const { RBAC } = require('rbac');
// const secure = require('rbac/controllers/express');
const { v4 } = require('uuid');
const login = require('./routes/login');
const api = require('./routes/api-v1');
const logger = require('./helpers/logging');
const {authorize} = require('./helpers/auth');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const rbac = new RBAC({
  roles: ['admin', 'user'],
});

app.use(async (req, res, next)=>{
  const request_id = v4();
  console.log(req.path);
  res.setHeader('Request-Id', request_id);
  logger.debug(JSON.stringify({ request_id }));
  logger.info(JSON.stringify(req.headers));
  next();
})

app.use('/auth', (req, res, next) => { req.path === '/login' ? next() : authorize(req, res, rbac, next)}, login);
app.use('/v1', (req, res, next) => authorize(req, res, next, rbac), api);

module.exports = {app, rbac};
