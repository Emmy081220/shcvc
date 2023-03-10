var express = require('express');
var router = express.Router();

/* GET Blog List page. */
router.get('/', function(req, res, next) {
  res.render('blog-list');
});

module.exports = router;
