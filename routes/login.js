var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var db = require('../config/db')
var dayjs =  require('dayjs')
var crypto = require('crypto');


router.get('/', function(req, res, next) {
    res.render('login/login');
});

router.post('/', function(req, res, next) {
    var body = req.body;
    var id = body.inputid;
    var pw = body.inputpw;
    var s = crypto.createHash('sha1');
    s.update(pw);
    var output = s.digest('hex');
    var datas = [id, output];
    
    db.query('select * from UserInfo where u_id=? and u_pw=?',datas, function(err,result){
        if(err) throw err;
        if(result[0]!==undefined){                            
            req.session.u_name = result[0].u_name;
            req.session.isLogined = true;
            db.query(`select * from Gallery`, function (error, result) {
                if(error){
                    throw error;
                }
                gallery = result;
                res.render('index', {'g_result': gallery, name:req.session.u_name});
            });
        };
    });
});
//------------------logout
router.get('/logout',function(req, res){
    req.session.destroy(function(){
    req.session;
    });
    res.redirect('/');
    })
//----------- findID
router.get('/findId', function(req, res, next) {
    res.render('login/findId');
});

router.post('/findId', function(req, res){
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
                        res.render('login/find_Result_Id',{result : result});
                    }
                });
            }
        };
    });
})
//----------- findPW
router.get('/findPw', function(req, res, next) {
    res.render('login/findPw');
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
                res.render('login/find_Change_Pw',{result : result});
            }
        };
    });
})

router.post('/pwCheck', function(req, res){
    var body = req.body;
    var u_email = body.input_email;
    var changepw = body.changepw;
    var s = crypto.createHash('sha1');
    s.update(changepw);
    var output = s.digest('hex');
    var datas = [output, u_email]    
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
                        res.render('login/pwCheck_Success.ejs',{result : result});
                    }
                });
            }
        };
    });
})
//----------- signUp
router.get('/signUp', function(req, res, next) {
    res.render('login/signUp');
});

router.post('/signup_data', function(req, res, next){
    let date = new dayjs();
    var body = req.body;
    var id = body.signup_Id;
    var pw = body.signup_Pw;
    var name = body.signup_Name;
    var email = body.signup_Email;
    var datetime = date.format('YYYY-MM-DD HH:mm:ss');
    
    var s = crypto.createHash('sha1');
    s.update(pw);
    var output = s.digest('hex');
    

    var sql = {u_id:id, u_pw: output , u_name:name, u_email:email, u_date:datetime};
 
    db.query('INSERT INTO UserInfo SET ?', sql , function (error, result) {
        if(error) {
            throw error;
        }    
        else {
            console.log("회원가입을 축하합니다.");
            res.redirect("/");
        };
    });
})

router.post('/idcheck', function(req, res, next){
    var body = req.body;
    var chk_id = body.signup_Id;
    var datas = [chk_id];
    
    db.query(`Select EXISTS (Select * from UserInfo where u_id=?) as isChk`,datas,function (error, result) {
        if(error) {
            throw error;
        }    
        else {
            if(result[0].isChk == 0){
                res.send('<script>alert(`사용 가능한 아이디 입니다.`); location.href=`/login/signUp`</script>')
            }
            else if(result[0].isChk == 1){
                res.send('<script>alert(`중복된 아이디 입니다.`); location.href=`/login/signUp` </script>')
            }
        };
    });
})

module.exports = router;