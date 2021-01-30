var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('research/research',{name:req.session.u_name});
});

router.get('/research_detail', function(req, res, next) {
    res.render('research/research_detail',{name:req.session.u_name});
});

router.get('/field', function(req, res, next) {
    res.render('index');
});


module.exports = router;