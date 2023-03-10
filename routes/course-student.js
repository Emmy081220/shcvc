var express = require('express');
var router = express.Router();

/* GET job category page. */
router.get('/', function(req, res, next) {
  res.render('course-student');
});

module.exports = router;