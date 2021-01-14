var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var db = require('../config/db')
var dayjs =  require('dayjs')


router.get('/', function(req, res, next) {
    var bodyemail = req.body.inputemail;
    db.query('select * from UserInfo', [bodyemail], function (error, result) {
        if (error) {
            throw error;
        }    
        else {
            res.render('findId', {'result' : result, email : bodyemail, dayjs});
            console.log(result);
        };
    });
});

router.post('/', function(req, res){
    var email = req.body.input_email;
    var datas = [email];
    db.query(`Select EXISTS (Select * from UserInfo where u_email = ?) as isChk`,datas,function (error, result) {
        if(error) {
            throw error;
        }    
        else {
            if(result[0].isChk == 0){
                res.send('<script>alert(`정보가 일치하지 않습니다.`); location.href=`/findId`</script>')
            }
            else if(result[0].isChk == 1){
                db.query(`Select * from UserInfo where u_email = ?`,datas,function (error, result) {
                    if(error){
                        throw error;
                    }
                    else {
                        res.render('find_Result_Id',{result : result});
                    }
                });
            }
        };
    });
})

module.exports = router;
