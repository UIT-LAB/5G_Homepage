var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var db = require('../config/db')
var dayjs =  require('dayjs')

router.get('/', function(req, res, next) {
    res.render('findPw');
});

router.post('/', function(req, res, next) {
    res.render('findPw');
});

router.post('/changePw', function(req, res){
    var body = req.body;
    var u_id = body.input_id;
    var u_email = body.input_email;
    var datas = [u_id, u_email];
    db.query(`Select EXISTS (Select * from UserInfo where u_id=? and u_email=?) as isChk`,datas,function (error, result) {
        if(error) {
            throw error;
        }    
        else {
            if(result[0].isChk == 0){
                res.send('<script>alert(`정보가 일치하지 않습니다.`); location.href=`/findPw`</script>')
            }
            else if(result[0].isChk == 1){
                res.render('find_Change_Pw',{result : result});
            }
        };
    });
})

router.post('/pwCheck_detail', function(req, res){
    var body = req.body;
    var u_email = body.input_email;
    var changepw = body.changepw;
    var datas = [changepw, u_email]    
    db.query(`Select EXISTS (Select * from UserInfo where u_email = ?) as isChk`,[req.body.input_email],function (error, result) {
        if(error) {
            throw error;
        }    
        else {
            if(result[0].isChk == 0){
                res.send('<script>alert(`정보가 일치하지 않습니다.`); location.href=`/find_Change_Pw`</script>')
                console.log(req.body.input_email);
            }
            else if(result[0].isChk == 1){
                db.query(`Update UserInfo set u_pw = ? where u_email = ?`,datas,function (error, result) {
                    if(error){
                        throw error;
                    }
                    else {
                        res.render('pwCheck_Success.ejs',{result : result});
                    }
                });
            }
        };
    });
})

module.exports = router;
