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
    throw err;
      }
    else {
       jwtname = decode.user.name
    }
   })
  }
  res.render('intro/intro',{name:jwtname});
});

router.get('/business', function(req, res, next) {
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
  res.render('intro/business',{name:jwtname});
});
router.get('/history', function(req, res, next) {
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
  res.render('Intro/intro',{name:jwtname});
});

router.get('/organization', function(req, res, next) {
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
    res.render('Intro/intro',{name:jwtname});
});

module.exports = router;