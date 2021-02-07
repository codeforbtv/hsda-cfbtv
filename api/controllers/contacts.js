'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  listContacts: listContacts,
  addContact: addContact,
  listContactsComplete: listContactsComplete,
  addContactsComplete: addContactsComplete,
  getContactComplete: getContactComplete,
  updateContactsComplete: updateContactsComplete,
  deleteContact: deleteContact,
  getContact: getContact,
  updateContact: updateContact,
  deleteContactComplete: deleteContactComplete,
  listContactPhones: listContactPhones,
  addContactPhone: addContactPhone,
  getContactPhone: getContactPhone,
  updateContactPhone: updateContactPhone,
  deleteContactPhone: deleteContactPhone
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function listContacts(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var query = req.swagger.params.query.value || 'no query given';
  var queries = req.swagger.params.queries.value || 'no queries given';
  var page = req.swagger.params.page.value || 'no page given';
  var per_page = req.swagger.params.per_page.value || 'no per_page given';
  var sort_by = req.swagger.params.sort_by.value || 'no sort_by given';
  var order = req.swagger.params.order.value || 'no order given';
  var outputMessage = [
    query,
    queries,
    page,
    per_page,
    sort_by,
    order
  ];
  console.log("listContacts() called");
  // this sends back a JSON response which is a single string
  res.json(outputMessage);
}

function addContact(req, res) {
  // corresponds to the post request
  console.log('addContact() called');
  const body = req.body || null;
  if (!body) {
    res.json ('missing body');
  }
  else {
    //look for first and last name in the body
    const firstName = body.firstName || 'no first name given';
    const lastName = body.lastName || 'no last name given';
    res.json('Contact first name: ' + firstName + '; Contact last name ' + lastName);
  }
}

function listContactsComplete(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var query = req.swagger.params.query.value || 'no query given';
  var queries = req.swagger.params.queries.value || 'no queries given';
  var page = req.swagger.params.page.value || 'no page given';
  var per_page = req.swagger.params.per_page.value || 'no per_page given';
  var sort_by = req.swagger.params.sort_by.value || 'no sort_by given';
  var order = req.swagger.params.order.value || 'no order given';
  var outputMessage = [
    query,
    queries,
    page,
    per_page,
    sort_by,
    order
  ];
  console.log("listContactsComplete() called");

  res.json(outputMessage);
}

function addContactsComplete(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

function getContactComplete(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

function updateContactsComplete(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

function deleteContact(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

function getContact(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

function updateContact(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

function deleteContactComplete(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

function listContactPhones(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

function addContactPhone(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

function getContactPhone(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

function updateContactPhone(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

function deleteContactPhone(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}