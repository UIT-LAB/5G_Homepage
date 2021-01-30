var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('intro/intro');
});
router.get('/business', function(req, res, next) {
    res.render('intro/business');
});
router.get('/history', function(req, res, next) {
    res.render('intro');
});
router.get('/organization', function(req, res, next) {
    res.render('intro');
});

module.exports = router;