'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const errorHandler404 = require('./error-handlers/404.js');
const errorHandler500 = require('./error-handlers/500.js');
app.use(express.json());

app.get('/person', logger, validator, getName); 

function getName(request, response){
  const person = {
    name: request.query.name,
  };  response.json(person);
}
function listen(port) {
    app.listen(port, ()=>console.log(`Hello from ${port}`) )
}
module.exports = {
    app,
    listen
}

app.use('*', errorHandler404);
app.use(errorHandler500);