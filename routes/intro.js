var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('Intro/intro');
});
router.get('/greetings', function(req, res, next) {
    res.render('Intro/intro');
});
router.get('/history', function(req, res, next) {
    res.render('Intro/intro');
});
router.get('/organization', function(req, res, next) {
    res.render('Intro/intro');
});

module.exports = router;