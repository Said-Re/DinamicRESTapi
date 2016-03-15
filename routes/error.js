var express = require('express');
var error = express.Router();

error.options('/*', function (req, res) {
  res.status(404).send({"message": 'Undefined: Use Post /routes'});
});

error.get('/*', function (req, res) {
  res.status(404).send({"message": 'Undefined: Use Post /routes'});
});

module.exports = error;
