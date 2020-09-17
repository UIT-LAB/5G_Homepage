var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Final Test' });
});

router.get('/nav', function(req, res) {
  res.render('nav');
});

router.get('/album', function(req, res) {
  res.render('album');
});

router.get('/login', function(req, res) {
  res.render('login');
});

module.exports = router;
