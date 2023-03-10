var express = require('express');
var router = express.Router();


var bloglist = require('./blog-list');
var blogDetails = require('./blog-details');
var login = require('./login');
var register = require('./register');
var jobCategory = require('./job-category');
var courseList = require('./course-list');
var terms = require('./term-condition');
var privacy = require('./privacy-policy');
var checkout = require('./checkout');
var courseDetails = require('./course-detail');


var pricingPlan = require('./pricing-plan');
var wishlist = require('./wishlist');

var faq = require('./faq');
var support = require('./support');
var cart = require('./cart');









var instructorChat = require('./instructor');
var StudentDashboard = require('./student');




var courseMsg = require('./course-message');
var courseLesson = require('./course-lesson');
var courseStudent = require('./course-student');
var comeSoon = require('./come-soon');
var courseWishlist = require('./course-wishlist');
var fgtPass = require('./forgot-password');

var purchaseHistory = require('./purchase-history');

var underConstruction = require('./under-construction');
var viewInvoice = require('./view-invoice');
var withdrawlInstructor = require('./withdrawal-instructor');



router.use("/blog-list", bloglist)
router.use("/blog-details", blogDetails)
router.use("/login", login)
router.use("/register", register)
router.use("/job-category", jobCategory)
router.use("/course-list", courseList)
router.use("/term-condition", terms)
router.use("/privacy-policy", privacy)
router.use("/checkout", checkout)
router.use("/course-details", courseDetails)



router.use("/pricing-plan", pricingPlan)
router.use("/wishlist", wishlist)

router.use("/faq", faq)
router.use("/support", support)
router.use("/cart", cart)
router.use("/instructor", instructorChat)







router.use("/student", StudentDashboard)


router.use("/course-message", courseMsg)
router.use("/course-lesson", courseLesson)
router.use("/course-student", courseStudent)
router.use("/come-soon", comeSoon)
router.use("/course-wishlist", courseWishlist)
router.use("/forgot-password", fgtPass)

router.use("/purchase-history", purchaseHistory)
router.use("/under-construction", underConstruction)
router.use("/view-invoice", viewInvoice)
router.use("/withdrawal-instructor", withdrawlInstructor)




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
