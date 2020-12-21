var express = require('express');
var router = express.Router();
var db = require('../config/db')
var dayjs =  require('dayjs')

router.get('/', function(req, res, next) {
    res.render('signUp');
});

router.post('/signup_data', function(req, res, next){
    let date = new dayjs();
    var body = req.body;
    var id = body.signup_Id;
    var pw = body.signup_Pw;
    var name = body.signup_Name;
    var email = body.signup_Email;
    var datetime = date.format('YYYY-MM-DD HH:mm:ss');
    var sql = {id:id, pw:pw , name:name, email:email, date:datetime};

    db.query('INSERT INTO Login SET ?', sql , function (error, result) {
        if(error) {
            throw error;
        }    
        else {
            console.log("회원가입을 축하합니다.");
            res.redirect("/");
        };
    });
})

module.exports = router;