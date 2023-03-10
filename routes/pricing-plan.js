var express = require('express');
var router = express.Router();

/* GET Prcing plan page. */
router.get('/', function(req, res, next) {
  res.render('pricing-plan');
});

module.exports = router;