var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var db = require('../config/db')
var dayjs =  require('dayjs')
const jwt = require('jsonwebtoken');
const key = require("./auth/key");
var multer   = require('multer'); // 1
let jwtname, jwtid;
var storage  = multer.diskStorage({ // 2
  destination(req, file, cb) {
    cb(null, 'public/images/gallery');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

var uploadWithOriginalFilename = multer({ storage: storage }); // 3-2


router.get('/write', function(req,res,next) {
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
  res.render('gallery/gallery_write', {dayjs, name:jwtname, cookie: req.cookies.user})
})

router.post('/insert_write', uploadWithOriginalFilename.array('attachments'), function(req, res, next) {
  console.log() 
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
  var date = new dayjs();
  var body = req.body;
  var title = body.gall_title;
  var datetime = date.format('YYYY-MM-DD');
 
  var sql = {g_title:title, g_write_date : datetime, g_img :req.files[0].filename};
    console.log(req.files)
  db.query('INSERT INTO Gallery SET ?', sql , function (error, result) {
      if(error) {
        throw error;
      }    
      else {
        res.redirect("/gallery/1");
       };
  });
});

router.post('/delete', function(req, res, next) {
  var body = req.body;
  var gid = body.gidx;
  
  db.query(`Delete from Gallery where gid='${gid}'`, function (error, result) {
      if(error) {
          throw error;
      }    
      else {
          res.redirect("/gallery/1");
      };
  });
});

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
