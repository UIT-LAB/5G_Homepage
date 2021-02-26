var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var db = require('../config/db')
var dayjs =  require('dayjs')

router.get('/:num', function(req, res, next) {
    db.query('select * from Gallery ORDER BY gid DESC', function (error, result) {
        if (error) {
            throw error;
          }    
        else {
            res.render('gallery/gallery', {result : result, g_num : req.params.num, max_value:9, dayjs,name:req.session.u_name });
            console.log(result);
        };
    });
});

router.get('/detail/:num', function(req, res, next) {
    db.query('select * from Gallery where gid = ?', req.params.num, function (error, result) {
        if (error) {
            throw error;
          }    
        else {
            res.render('gallery/gallery_detail', {result : result, g_num : req.params.num, max_value:9, dayjs,name:req.session.u_name });
            console.log(result);
        };
    });
});


module.exports = router;
