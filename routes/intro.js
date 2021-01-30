var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('intro/intro',{name:req.session.u_name});
});
router.get('/business', function(req, res, next) {
    res.render('intro/business',{name:req.session.u_name});
});
router.get('/history', function(req, res, next) {
    res.render('Intro/intro');
});
router.get('/organization', function(req, res, next) {
    res.render('Intro/intro');
});

module.exports = router;