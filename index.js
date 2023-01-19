// inside index.js
const express = require('express');
const morgan = require('morgan');
const server = express();
const PORT = 3000;

server.use(morgan('dev'));
server.use(express.json())

require('dotenv').config();

//console.log(process.env.JWT_SECRET);

const apiRouter = require('./api');
server.use('/api', apiRouter);

const { client } = require('./db');
client.connect();

server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});