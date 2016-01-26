var express = require('express');
var router = express.Router();


router.all('/', function(req, res, next) {
  console.log('router.all called');
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
