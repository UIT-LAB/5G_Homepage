var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var db = require('../config/db')
var dayjs =  require('dayjs')
const jwt = require('jsonwebtoken');
const key = require("./auth/key");
let jwtname, jwtid;

router.get('/:num', function(req, res, next) {
    if(req.cookies.user != undefined){
      let token = req.cookies.user;
      jwt.verify(token, key, (err, decode)=>{
        if(err){
          res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
        }
        else {
          jwtname = decode.user.name
          jwtid = decode.user.id
        }
      })
     }
    db.query('select * from Gallery ORDER BY gid DESC', function (error, result) {
        if (error) {
            throw error;
          }    
        else {
            res.render('gallery/gallery', {result : result, g_num : req.params.num, max_value:9, dayjs,name:jwtname,cookie: req.cookies.user });
            console.log(result);
        };
    });
});

router.get('/detail/:num', function(req, res, next) {
    if(req.cookies.user != undefined){
      let token = req.cookies.user;
      jwt.verify(token, key, (err, decode)=>{
        if(err){
          res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
        }
        else {
          jwtname = decode.user.name
          jwtid = decode.user.id
        }
      })
     }
    db.query(`select * from Gallery where gid =  '${req.params.num}'`, function (error, result) {
        if (error) {
            throw error;
          }    
        else {
            res.render('gallery/gallery_detail', {result : result, g_num : req.params.num, max_value:9, dayjs,name:jwtname,cookie: req.cookies.user });
        };
    });
});


module.exports = router;
