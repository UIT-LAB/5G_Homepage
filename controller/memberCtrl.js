const MemberDAO = require('../model/memberDAO');

const member = (req, res) => {
  let student = "참여학생"
  let enterprise = "기업체"
  let parameters = {
    student,
    enterprise
  }
  let jwtname = req.body.jwtname;

  MemberDAO.member(parameters)
    .then((db_data) => {
      res.render('member/member', { result: db_data, m_num: req.params.num, max_value: 12, name: jwtname, cookie: req.cookies.user });
    })
    .catch((err) => {
      throw err;
    })
}

module.exports = {
  member
}