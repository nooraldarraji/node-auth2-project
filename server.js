const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');

const users = require('./api/router');

server.use(helmet());
server.use(cors());
server.use(express.json())

server.use('/api/users', users);


module.exports = server;