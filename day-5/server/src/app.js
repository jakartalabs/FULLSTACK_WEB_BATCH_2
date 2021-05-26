const express = require('express');
const bodyParser = require('body-parser');
const { v4 } = require('uuid');
const api =require('./routes/api-v1');
const logger = require('./helpers/logging');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next)=>{
  const request_id = v4();

  res.setHeader('Request-Id', request_id);
  logger.debug(JSON.stringify({ request_id }));
  logger.info(JSON.stringify(req.headers));
  next();
})
app.use('/v1', api);

module.exports = app;
