var express = require('express');
var router = express.Router();
var db = require('../config/db');
var dayjs = require('dayjs');
var crypto = require('crypto');

/* GET users listing. */
router.get('/', function (req, res, next) {
  var select_Gallery = `select gid, g_title, g_img from Gallery ORDER BY g_write_date DESC LIMIT 3`;
  var select_Research = `select rfid, research_name_ko from Research_Fields ORDER BY date_start DESC LIMIT 3`;
  var select_Notice = `select nid, n_title from Notice_Board ORDER BY nid DESC LIMIT 3`;
  var select_Post = `select pid, p_title from Post_Board ORDER BY pid DESC LIMIT 3`;

  db.query(select_Gallery, function (error, result) {
    if (error) {
      throw error;
    }
    else {
      g_result = result;
      console.log(result);
      db.query(select_Research, function (error, result) {
        if (error) {
          throw error;
        }
        else {
          r_result = result;
          console.log(result);
          db.query(select_Notice, function (error, result) {
            if (error) {
              throw error;
            }
            else {
              n_result = result;
              console.log(result);
              db.query(select_Post, function (error, result) {
                if (error) {
                  throw error;
                }
                else {
                  p_result = result;
                  console.log(result);
                  res.render('index', { 'g_result': g_result, 'r_result': r_result, 'n_result': n_result, dayjs, 'name': req.session.u_name });
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
    db.query('select * from UserInfo where u_id = ?', req.session.u_id, function (error, result) {
       if (error) {
           throw error;
      }    
      else {
        res.render('login/profile',{result: result, name : req.session.u_name, dayjs});
      }
   });
 });

 router.get('/profile_update', function(req, res, next) {
  db.query('select * from UserInfo where u_id = ?', req.session.u_id, function (error, result) {
     if (error) {
         throw error;
       }    
     else {
      res.render('login/profile_update',{result: result, name : req.session.u_name, dayjs});
    };
 });
});
router.post('/profile_update', function(req, res, next) {
  var body = req.body;
  var profile_name = body.profile_name ;
  var profile_phone = body.profile_phone ;
  var profile_email = body.profile_email ;
  var datas = [profile_name,profile_phone,profile_email, req.session.u_id];

  db.query('Update UserInfo set u_name = ?, u_phone = ?, u_email = ? where u_id = ? ', datas, function (error, result) {
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
  var datas = [changeoutput ,currentoutput ]
  db.query(`Select EXISTS (Select * from UserInfo where u_pw = ?) as isChk`, [currentoutput], function (error, result) {
      if (error) {
          throw error;
      }
      else {
          if (result[0].isChk == 0) {
              res.send('<script>alert(`비밀번호가 일치하지 않습니다.`); history.back();</script>')
              console.log(currentoutput);
          }
          else if (result[0].isChk == 1) {
              db.query(`Update UserInfo set u_pw = ? where u_pw = ?`, datas, function (error, result) {
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