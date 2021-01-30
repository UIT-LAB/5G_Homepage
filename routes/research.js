var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('research/research');
});

router.get('/research_detail', function(req, res, next) {
    res.render('research/research_detail');
});

router.get('/field', function(req, res, next) {
    res.render('index');
});


module.exports = router;