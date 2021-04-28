'use strict';
require('dotenv').config();
var SwaggerRestify = require('swagger-restify-mw');
var restify = require('restify');
var app = restify.createServer();
const securityHandlers = require('./api/helpers/security-handlers');

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
