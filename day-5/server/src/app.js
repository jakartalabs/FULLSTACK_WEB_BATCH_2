const express = require('express');
const bodyParser = require('body-parser');
const api =require('./routes/api-v1');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/v1', api);

module.exports = app;
