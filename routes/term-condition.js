var express = require('express');
var router = express.Router();

/* GET Terms condition  page. */
router.get('/', function(req, res, next) {
  res.render('term-condition');
});

module.exports = router;