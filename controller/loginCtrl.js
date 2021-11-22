const db = require('../config/db');
let dayjs = require('dayjs');
const jwt = require('jsonwebtoken');
const key = require('../routes/auth/key');
const crypto = require('crypto');
const loginDAO = require('../model/loginDAO');

const getLoginPage = (req, res) => {
    res.render('login/login');
}

const postLoginPage = (req, res, next) => {
    let parameters = {
        u_id: req.body.inputid,
        u_pw: crypto.createHash('sha512').update(req.body.inputpw).digest('base64')
    }

    var token_value;

    loginDAO.login(parameters)
        .then((db_data) => {
            if (db_data[0] !== undefined) {
                const user = {
                    id: db_data[0].u_id,
                    name: db_data[0].u_name,
                }

                token_value = jwt.sign({ user: user }, key, { expiresIn: '1h' });
                res.cookie("user", token_value);

                // jwt.sign({ user: user }, key, { expiresIn: '1h' }, (error, token) => {
                //     if (error) {
                //         console.log(error);
                //         throw error;
                //     } else {
                //         res.cookie("user", token);
                //         token_value = token;
                //         console.log(token_value);
                //     }
                // });

                jwt.verify(token_value, key, (err, decode) => {
                    if (err) {
                        console.log(err);
                        res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
                    }
                    else {
                        let parameter = {
                            token_value: token_value,
                            u_id: db_data[0].u_id
                        }
                        loginDAO.insertToken(parameter)
                            .then(() => {
                                res.redirect('/');
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    }
                })

            }
            else {
                res.send('<script>alert(`정보가 일치하지 않습니다.`); location.href=`/login`</script>')
            }
        })
}

//------------------logout
const logout = (req, res) => {
    res.clearCookie('user');
    res.redirect('/');
}

//----------- findID
const getFindId = (req, res) => {
    res.render('login/findId');
}

const postFindId = (req, res) => {
    let name = req.body.input_name;
    let email = req.body.input_email;
    let parameters = {
        name: name,
        email: email
    }

    loginDAO.findId(parameters)
        .then((db_data) => {
            if (db_data.length == 0) {
                res.send('<script>alert(`정보가 일치하지 않습니다.`); location.href=`/login/findId`</script>');
            } else {
                res.render('login/find_Result_Id', { result: db_data });
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

//----------- findPW
const getFindPw = (req, res) => {
    res.render('login/findPw');
}

const postChangePw = (req, res) => {
    let u_id = req.body.input_id;
    let u_email = req.body.input_email;
    let parameters = {
        u_id,
        u_email
    }

    loginDAO.findPw(parameters)
        .then((db_data) => {
            if (db_data[0].isChk == 0) {
                res.send('<script>alert(`정보가 일치하지 않습니다.`); location.href=`/findPw`</script>')
            } else if (db_data[0].isChk == 1) {
                res.render('login/find_Change_Pw');
            }
        }).catch((err) => {
            console.log(err);
        })
}

const postPwCheck = (req, res) => {
    let u_id = req.body.input_id;
    let changepw = req.body.changepw;

    let output = crypto.createHash('sha512').update(changepw).digest('base64')
    let parameters = {
        output,
        u_id
    }

    loginDAO.pwCheck(parameters)
        .then((db_data) => {
            if (db_data.affectedRows == 0) {
                res.send('<script>alert(`정보가 일치하지 않습니다.`); location.href=`/find_Change_Pw`</script>');
            }
            else if (db_data.affectedRows == 1) {
                res.send(`<script>alert("비밀번호 변경이 완료되었습니다.");window.close();</script >`);
            }
        })
        .catch((err) => {
            console.log(err);
        })
}

//----------- signUp
const getSignUp = (req, res) => {
    res.render('login/signUp');
}

const postSignUp = (req, res) => {
    let date = new dayjs();
    let id = req.body.signup_Id;
    let pw = req.body.signup_Pw;
    let name = req.body.signup_Name;
    let email = req.body.signup_Email;
    let phone = req.body.singup_Phone;
    let datetime = date.format('YYYY-MM-DD HH:mm:ss');
    let output = crypto.createHash('sha512').update(pw).digest('base64')

    let parameters = {
        u_id: id,
        u_pw: output,
        u_name: name,
        u_email: email,
        u_phone: phone,
        u_date: datetime
    };

    loginDAO.signUp(parameters)
        .then(() => {
            res.redirect('/login');
        })
        .catch((err) => {
            console.log(err);
        })
}

//----------- check dup id
const getIdCheck = (req, res) => {
    res.render('login/idchk');
}

const postIdCheck = (req, res) => {
    var chk_id = req.body.input_id;
    var parameters = {
        chk_id
    };
    loginDAO.isIdDup(parameters)
        .then((db_data) => {
            if (db_data[0].isChk == 0) {
                res.send('<script>alert(`사용 가능한 아이디 입니다.`); window.close(); </script>');
            } else if (db_data[0].isChk == 1) {
                res.send('<script>alert(`중복된 아이디 입니다.`); history.back(); </script>');
            }
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
    getLoginPage,
    postLoginPage,
    logout,
    getFindId,
    postFindId,
    getFindPw,
    postChangePw,
    postPwCheck,
    getSignUp,
    postSignUp,
    getIdCheck,
    postIdCheck
}