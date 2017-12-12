'use strict';

const server = require('./server.js');
const serverless = require('aws-serverless-express');

module.exports.hello = (event, context) => {
  console.log(event); // Contains incoming request data (e.g., query params, headers and more)

  server.then(app => {
    const server = serverless.createServer(app);
    serverless.proxy(server, event, context);
  });
};
