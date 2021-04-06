var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const key = require("./auth/key");
let jwtname, jwtid;

router.get('/', function(req, res, next) {
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
  res.render('intro/intro',{name:jwtname,cookie: req.cookies.user});
});

router.get('/business', function(req, res, next) {
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
  res.render('intro/business',{name:jwtname,cookie: req.cookies.user});
});
router.get('/history', function(req, res, next) {
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
  res.render('Intro/intro',{name:jwtname,cookie: req.cookies.user});
});

router.get('/organization', function(req, res, next) {
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
    res.render('Intro/organization',{name:jwtname,cookie: req.cookies.user});
});

module.exports = router;