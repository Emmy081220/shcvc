var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('deposit-student-dashboard');
});

router.get('/deposit-student', function(req, res, next) {
  res.render('deposit-student');
});

router.get('/setting-edit-profile', function(req, res, next) {
  res.render('setting-edit-profile');
});

router.get('/setting-student-accounts', function(req, res, next) {
  res.render('setting-student-accounts');
});

router.get('/setting-student-delete-profile', function(req, res, next) {
  res.render('setting-student-delete-profile');
});

router.get('/setting-student-billing', function(req, res, next) {
  res.render('setting-student-billing');
});

router.get('/setting-student-invoice', function(req, res, next) {
  res.render('setting-student-invoice');
});

router.get('/setting-student-notification', function(req, res, next) {
  res.render('setting-student-notification');
});

router.get('/setting-student-payment', function(req, res, next) {
  res.render('setting-student-payment');
});

router.get('/setting-student-privacy', function(req, res, next) {
  res.render('setting-student-privacy');
});

router.get('/setting-student-referral', function(req, res, next) {
  res.render('setting-student-referral');
});

router.get('/setting-student-security', function(req, res, next) {
  res.render('setting-student-security');
});

router.get('/setting-student-social-profile', function(req, res, next) {
  res.render('setting-student-social-profile');
});

router.get('/setting-student-subscription', function(req, res, next) {
  res.render('setting-student-subscription');
});

router.get('/setting-support-new-tickets', function(req, res, next) {
  res.render('setting-support-new-tickets');
});

router.get('/setting-support-tickets', function(req, res, next) {
  res.render('setting-support-tickets');
});

router.get('/student-profile', function(req, res, next) {
  res.render('student-profile');
});

router.get('/students-list', function(req, res, next) {
  res.render('students-list');
});

router.get('/transactions-student', function(req, res, next) {
  res.render('transactions-student');
});

module.exports = router;