var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
<<<<<<< HEAD
    res.render('intro/intro');
});
router.get('/business', function(req, res, next) {
    res.render('intro/business');
=======
    res.render('Intro/intro');
});
router.get('/greetings', function(req, res, next) {
    res.render('Intro/intro');
>>>>>>> f9a8e76951ff834c4640ce22d37ab7793eaccc7a
});
router.get('/history', function(req, res, next) {
    res.render('Intro/intro');
});
router.get('/organization', function(req, res, next) {
    res.render('Intro/intro');
});

module.exports = router;