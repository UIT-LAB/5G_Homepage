var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var db = require('../config/db')
var dayjs =  require('dayjs')

router.get('/:num', function(req, res, next) {
    db.query('select * from Research_results', function (error, result) {
     if (error) {
        throw error;
     }    
     else {
        res.render('research/research',{result : result, r_num :req.params.num , max_value: 15, dayjs, name:req.session.u_name});
     };
    });
});

router.get('/detail/:num', function(req, res, next) {
    res.render('research/research_detail',{name:req.session.u_name});
});

router.get('/thesis/:num', function(req, res, next) {
    db.query('select * from Research_Fields', function (error, result) {
        if (error) {
          throw error;
        }    
        else {
            res.render('research/thesis',{result : result, t_num :req.params.num , max_value: 15, dayjs, name:req.session.u_name});
        };
      });
});

router.get('/thesis/detail/:num', function(req, res, next) {
    res.render('research/thesis_detail',{name:req.session.u_name});
});

router.get('/field', function(req, res, next) {
    res.render('index');
});


module.exports = router;