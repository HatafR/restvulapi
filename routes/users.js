const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const {APP_NAME} = process.env;
res.send(APP_NAME)
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
