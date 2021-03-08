var express = require('express');
var router = express.Router();
var db = require('../config/db')
var dayjs =  require('dayjs')

router.get('/:num', function(req, res, next){
  var student = "참여학생"
   db.query(`select * from Member join Member_career on Member.mid = Member_career.mid where not Member.m_partdivision='${student}'`, function (error, result) {
      let date = new dayjs();
      if (error) {
          throw error;
        }    
      else {
          res.render('member/member', {result : result, m_num : req.params.num, max_value:12,name:req.session.u_name});
      };
  });
})

module.exports = router;