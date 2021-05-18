'use strict';
require('dotenv').config();
const SwaggerRestify = require('swagger-restify-mw');
const restify = require('restify');
const app = restify.createServer();
const securityHandlers = require('./api/helpers/security-handlers');
const db = require('./api/helpers/db-connection');

module.exports = app; // for testing

var config = {
  appRoot: __dirname, // required config
  swaggerSecurityHandlers: securityHandlers,
};

SwaggerRestify.create(config, function(err, swaggerRestify) {
  if (err) { throw err; }

  swaggerRestify.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

});
