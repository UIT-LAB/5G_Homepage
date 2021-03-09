var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var db = require('../config/db')
var dayjs =  require('dayjs')
const jwt = require('jsonwebtoken');
const key = require("./auth/key");
let jwtname, jwtid;


router.get('/thesis/:num', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
      }
    })
  }  
  db.query('select * from thesis ORDER BY tid DESC', function (error, result) {
    if (error) {
     throw error;
    }    
    else {
      res.render('research/thesis',{result : result, t_num :req.params.num , max_value: 15, dayjs, name:jwtname});
    };
  });
});

router.get('/thesis/detail/:num', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
      }
    })
  }
  db.query(`select * from thesis where tid = '${req.params.num}'`, function (error, result) {
   if (error) {
     throw error;
   }    
   else {
     res.render('research/thesis_detail',{result : result, t_num :req.params.num , max_value: 15, dayjs, name: jwtname});
   };
  });
});

router.get('/license/:num', function(req, res, next){
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
      }
    })
  }
  db.query('select * from license ORDER BY lid DESC', function (error, result) {
    if (error) {
      throw error;
    }    
    else {
      res.render('research/license',{result : result, l_num :req.params.num , max_value: 15, dayjs, name:jwtname});
    };
  });
})

router.get('/license/detail/:num', function(req, res, next){
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
      }
    })
  }
  db.query(`select * from license where lid = '${req.params.num}'`, function (error, result) {
    if (error) {
      throw error;
    }    
    else {
      res.render('research/license_detail',{result : result, l_num :req.params.num , max_value: 15, dayjs, name:jwtname});
    };
  });
})

router.get('/software/:num', function(req, res, next){
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
      }
    })
  }
  db.query('select * from software ORDER BY sid DESC', function (error, result) {
      if (error) {
        throw error;
      }    
      else {
          res.render('research/software',{result : result, s_num :req.params.num , max_value: 15, dayjs, name:jwtname});
      };
    });
})

router.get('/software/detail/:num', function(req, res, next){
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
      }
    })
  }
  db.query(`select * from software where sid = '${req.params.num}'`, function (error, result) {
      if (error) {
        throw error;
      }    
      else {
          res.render('research/software_detail',{result : result, s_num :req.params.num , max_value: 15, dayjs, name:jwtname});
      };
    });
})

router.get('/standard/:num', function(req, res, next){
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
      }
    })
  }
  db.query(`select * from standard ORDER BY stid DESC`, function (error, result) {
      if (error) {
        throw error;
      }    
      else {
          res.render('research/standard',{result : result, st_num :req.params.num , max_value: 15, dayjs, name:jwtname});
      };
    });
})

router.get('/software/detail/:num', function(req, res, next){
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
      }
    })
  }
  db.query(`select * from software where sid =  '${req.params.num}'`, function (error, result) {
      if (error) {
        throw error;
      }    
      else {
          res.render('research/software_detail',{result : result, s_num :req.params.num , max_value: 15, dayjs, name:jwtname});
      };
    });
})

module.exports = router;