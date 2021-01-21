var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('intro');
});
router.get('/greetings', function(req, res, next) {
    res.render('intro');
});
router.get('/history', function(req, res, next) {
    res.render('intro');
});
router.get('/organization', function(req, res, next) {
    res.render('intro');
});

module.exports = router;