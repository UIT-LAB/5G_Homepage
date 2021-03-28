var express = require('express');
var router = express.Router();
var db = require('../config/db')
var dayjs =  require('dayjs')
const jwt = require('jsonwebtoken');
const key = require("./auth/key");
let jwtname, jwtid;

router.get('/:num', function(req, res, next){
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
  var student = "참여학생"
  var enterprise = "기업체"
   db.query(`select * from Member join Member_career on Member.mid = Member_career.mid where not Member.m_partdivision in ('${student}', '${enterprise}')`, function (error, result) {
      if (error) {
          throw error;
        }    
      else {
          res.render('member/member', {result : result, m_num : req.params.num, max_value:12,name:jwtname});
      };
  });
})

module.exports = router;