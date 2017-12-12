'use strict';

const server = require('./server.js');
const serverless = require('serverless-http');

module.exports.hello = (event, context, callback) => {
  console.log(event); // Contains incoming request data (e.g., query params, headers and more)

  server.then(app => {
    serverless(app)(event, context, callback);
  });
};
