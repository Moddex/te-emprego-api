require('dotenv').config();
require('module-alias/register');

const app = require('@app');
const config = require('@config');

app.listen(config.app.port, (err) => {
  if (err) return console.log(err);
  console.log(`Iniciou em http://localhost:${config.app.port}`);
});
