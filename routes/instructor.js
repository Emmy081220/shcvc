var express = require('express');
var router = express.Router();

/* GET job category page. */
router.get('/', function(req, res, next) {
  res.render('instructor-dashboard');
});

router.get('/instructor-chat', function(req, res, next) {
  res.render('instructor-chat');
});

router.get('/instructor-course', function(req, res, next) {
  res.render('instructor-course');
});

router.get('/instructor-dashboard', function(req, res, next) {
  res.render('instructor-dashboard');
});

router.get('/instructor-delete-profile', function(req, res, next) {
  res.render('instructor-delete-profile');
});

router.get('/instructor-earnings', function(req, res, next) {
  res.render('instructor-earnings');
});

router.get('/instructor-edit-profile', function(req, res, next) {
  res.render('instructor-edit-profile');
});

router.get('/instructor-linked-account', function(req, res, next) {
  res.render('instructor-linked-account');
});

router.get('/instructor-list', function(req, res, next) {
  res.render('instructor-list');
});

router.get('/instructor-new-tickets', function(req, res, next) {
  res.render('instructor-new-tickets');
});

router.get('/instructor-notification', function(req, res, next) {
  res.render('instructor-notification');
});

router.get('/instructor-orders', function(req, res, next) {
  res.render('instructor-orders');
});

router.get('/instructor-payouts', function(req, res, next) {
  res.render('instructor-payouts');
});

router.get('/instructor-profile-privacy', function(req, res, next) {
  res.render('instructor-profile-privacy');
});

router.get('/instructor-profile', function(req, res, next) {
  res.render('instructor-profile');
});

router.get('/instructor-reviews', function(req, res, next) {
  res.render('instructor-reviews');
});

router.get('/instructor-security', function(req, res, next) {
  res.render('instructor-security');
});

router.get('/instructor-social-profiles', function(req, res, next) {
  res.render('instructor-social-profiles');
});

router.get('/instructor-student-grid', function(req, res, next) {
  res.render('instructor-student-grid');
});

router.get('/dashboard-instructor', function(req, res, next) {
  res.render('dashboard-instructor');
});

router.get('/deposit-instructor-dashboard', function(req, res, next) {
  res.render('deposit-instructor-dashboard');
});

router.get('/deposit-instructor', function(req, res, next) {
  res.render('deposit-instructor');
});

router.get('/instructor-tickets', function(req, res, next) {
  res.render('instructor-tickets');
});

router.get('/add-course', function(req, res, next) {
  res.render('add-course');
});

router.get('/transactions-instructor', function(req, res, next) {
  res.render('transactions-instructor');
});

module.exports = router;