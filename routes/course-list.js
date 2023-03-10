var express = require('express');
var router = express.Router();

/* GET course list page. */
router.get('/', function(req, res, next) {
  res.render('course-list');
});

module.exports = router;