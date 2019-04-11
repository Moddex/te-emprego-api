const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('hello , world');
});

app.listen(4000, (err) => {
  if (err) return console.log(err);
  console.log('Iniciou em http://localhost:4000');
});
