const jwt = require('jsonwebtoken');
const key = require('../routes/auth/key');
const MemberDAO = require('../model/memberDAO');
let jwtname;

const member = (req, res) => {
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
      let student = "참여학생"
      let enterprise = "기업체"
      let parameters = {
          student,
          enterprise
      }
      MemberDAO.member(parameters)
      .then((db_data) => {
          res.render('member/member', {result : db_data, m_num : req.params.num, max_value: 12, name: jwtname, cookie: req.cookies.user});
      })
      .catch((err) => {
          throw err;
      }) 
}

module.exports = {
    member
}