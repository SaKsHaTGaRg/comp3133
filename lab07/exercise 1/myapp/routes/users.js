var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// GET users route
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST users route
router.post('/', function(req, res, next) {
  console.log('POST body:', req.body);
  res.send('POST received!');
});

module.exports = router;