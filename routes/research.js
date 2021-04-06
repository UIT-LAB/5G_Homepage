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
        res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
      }
      else {
        jwtname = decode.user.name
      }
    })
  }  
  db.query('select tid, SCI_division, thesis_name, lead_author_name, co_author_name from thesis ORDER BY tid DESC', function (error, result) {
    if (error) {
     throw error;
    }    
    else {
      res.render('research/thesis',{result : result, t_num :req.params.num , max_value: 15, dayjs, name:jwtname,cookie: req.cookies.user});
    };
  });
});

router.get('/thesis/detail/:num', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
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
     res.render('research/thesis_detail',{result : result, t_num :req.params.num , max_value: 15, dayjs, name: jwtname,cookie: req.cookies.user});
   };
  });
});

router.get('/license/:num', function(req, res, next){
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
      }
      else {
        jwtname = decode.user.name
      }
    })
  }
  db.query('select lid, invention_name, business_year, standard_license_status from license ORDER BY lid DESC', function (error, result) {
    if (error) {
      throw error;
    }    
    else {
      res.render('research/license',{result : result, l_num :req.params.num , max_value: 15, dayjs, name:jwtname,cookie: req.cookies.user});
    };
  });
})

router.get('/license/detail/:num', function(req, res, next){
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
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
      res.render('research/license_detail',{result : result, l_num :req.params.num , max_value: 15, dayjs, name:jwtname,cookie: req.cookies.user});
    };
  });
})

router.get('/software/:num', function(req, res, next){
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
      }
      else {
        jwtname = decode.user.name
      }
    })
  }
  db.query('select sid, registration_num, registration_name, registration_date from software ORDER BY sid DESC', function (error, result) {
      if (error) {
        throw error;
      }    
      else {
          res.render('research/software',{result : result, s_num :req.params.num , max_value: 15, dayjs, name:jwtname,cookie: req.cookies.user});
      };
    });
})

router.get('/software/detail/:num', function(req, res, next){
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
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
          res.render('research/software_detail',{result : result, s_num :req.params.num , max_value: 15, dayjs, name:jwtname,cookie: req.cookies.user});
      };
    });
})

router.get('/standard/:num', function(req, res, next){
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
      }
      else {
        jwtname = decode.user.name
      }
    })
  }
  db.query(`select stid, document, approval_num, approval_date from standard ORDER BY stid DESC`, function (error, result) {
      if (error) {
        throw error;
      }    
      else {
          res.render('research/standard',{result : result, st_num :req.params.num , max_value: 15, dayjs, name:jwtname,cookie: req.cookies.user});
      };
    });
})

router.get('/standard/detail/:num', function(req, res, next){
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
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
          res.render('research/standard_detail',{result : result, s_num :req.params.num , max_value: 15, dayjs, name:jwtname,cookie: req.cookies.user});
      };
    });
})

router.get('/technology/:num', function(req, res, next){
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
      }
      else {
        jwtname = decode.user.name
      }
    })
  }
  db.query(`select tid, business_year, tech_name, TIinstitution_name from technology ORDER BY tid DESC`, function (error, result) {
      if (error) {
        throw error;
      }    
      else {
          res.render('research/technology',{result : result, t_num :req.params.num , max_value: 15, dayjs, name:jwtname,cookie: req.cookies.user});
      };
    });
})

router.get('/technology/detail/:num', function(req, res, next){
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
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
          res.render('research/standard_detail',{result : result, s_num :req.params.num , max_value: 15, dayjs, name:jwtname,cookie: req.cookies.user});
      };
    });
})

module.exports = router;