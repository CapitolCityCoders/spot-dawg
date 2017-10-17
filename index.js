'use strict';

// set env variables
require('dotenv').config();

console.log('prepare yourself for spotdawg');

const server = require('./server');
const config = require('./config/main.config');

server.listen(config.PORT);
