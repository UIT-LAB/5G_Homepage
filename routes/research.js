var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/result', function(req, res, next) {
    res.render('index');
});

router.get('/field', function(req, res, next) {
    res.render('index');
});


module.exports = router;