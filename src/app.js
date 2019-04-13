const express = require('express');
const sendError = require('@helpers/sendError');
const rateLimit = require('@middlewares/rateLimit.js');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(...rateLimit);

app.use(sendError);

app.use('/', routes);

module.exports = app;
