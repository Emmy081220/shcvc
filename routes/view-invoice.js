var express = require('express');
var router = express.Router();

/* GET course details page. */
router.get('/', function(req, res, next) {
  res.render('view-invoice');
});

module.exports = router;