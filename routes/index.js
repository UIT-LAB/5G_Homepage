var express = require('express');
var router = express.Router();
var db = require('../config/db');
var dayjs = require('dayjs');
var crypto = require('crypto');
const jwt = require('jsonwebtoken');
const key = require("./auth/key");
let jwtname, jwtid;
/* GET users listing. */
router.get('/', function (req, res, next) {
  var select_Gallery = `select gid, g_title, g_img from Gallery ORDER BY g_write_date DESC LIMIT 3`;
  var select_Research = `select tid, thesis_name from thesis ORDER BY tid DESC LIMIT 3`;
  var select_Notice = `select nid, n_title from Notice_Board ORDER BY nid DESC LIMIT 3`;
  var select_license = `select lid, invention_name from license ORDER BY lid DESC LIMIT 3`;
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
    db.query(select_Gallery, function (error, result) {
      if (error) {
        throw error;
      }
      else {
        g_result = result;
        db.query(select_Research, function (error, result) {
          if (error) {
            throw error;
          }
          else {
            r_result = result;
            db.query(select_Notice, function (error, result) {
              if (error) {
                throw error;
              }
              else {
                n_result = result;
                db.query(select_license, function (error, result) {
                  if (error) {
                    throw error;
                  }
                  else {
                    p_result = result;
                    res.render('index', { 'g_result': g_result, 'r_result': r_result, 'n_result': n_result, dayjs, 'name': jwtname ,cookie: req.cookies.user});
                  }
                });
              }
            });
          }
        });
      }
    });
  });

router.get('/profile', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }
  db.query(`select * from UserInfo where u_id ='${jwtid}'`, function (error, result) {
       if (error) {
           throw error;
      }    
      else {
        res.render('login/profile',{result: result, name:jwtname,cookie: req.cookies.user, dayjs});
      }
   });
 });

 router.get('/profile_update', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }
  db.query(`select * from UserInfo where u_id = '${jwtid}'`, function (error, result) {
     if (error) {
         throw error;
       }    
     else {
      res.render('login/profile_update',{result: result, name : jwtname ,cookie: req.cookies.user, dayjs});
    };
 });
});
router.post('/profile_update', function(req, res, next) {
  var body = req.body;
  var profile_name = body.profile_name ;
  var profile_phone = body.profile_phone ;
  var profile_email = body.profile_email ;
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }

  db.query(`Update UserInfo set u_name = '${profile_name}', u_phone = '${profile_phone}', u_email = '${profile_email}' where u_id = '${jwtid}'`, function (error, result) {
     if (error) {
         throw error;
       }    
     else {
      res.send('<script>alert(`정보가 수정되었습니다.`); location.href=`/profile`</script>')
     };
 });
});

router.get('/profile_password', function(req,res,next) {
  res.render('login/profile_changePw');
})

router.post('/profile_password', function (req, res) {
  var body = req.body;
  var currentpw = body.currentpw;
  var changepw = body.changepw;
  var currentoutput = crypto.createHash('sha512').update(currentpw).digest('base64')
  var changeoutput = crypto.createHash('sha512').update(changepw).digest('base64')
  db.query(`Select EXISTS (Select * from UserInfo where u_pw = '${currentoutput}') as isChk`, function (error, result) {
      if (error) {
          throw error;
      }
      else {
          if (result[0].isChk == 0) {
              res.send('<script>alert(`비밀번호가 일치하지 않습니다.`); history.back();</script>')
          }
          else if (result[0].isChk == 1) {
              db.query(`Update UserInfo set u_pw = '${changeoutput}' where u_pw = '${currentoutput}'`, function (error, result) {
                  if (error) {
                      throw error;
                  }
                  else {
                    res.redirect('/profile');
                  }
              });
          }
      };
  });
})


module.exports = router;