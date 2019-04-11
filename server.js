require('dotenv').config();
require('module-alias/register');
const boot = require('@services/boot');
const mongoose = require('mongoose');
const config = require('@config');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);

if (config.db.connectionString) {
  mongoose.connect(config.db.connectionString, boot);
} else {
  console.log('Sem string de conexão foi informada');
}
