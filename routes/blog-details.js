var express = require('express');
var router = express.Router();

/* GET blog details page. */
router.get('/', function(req, res, next) {
  res.render('blog-details');
});

module.exports = router;