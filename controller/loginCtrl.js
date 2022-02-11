let dayjs = require('dayjs');
const jwt = require('jsonwebtoken');
const key = require('../routes/auth/key');
const crypto = require('crypto');
const loginDAO = require('../model/loginDAO');

const getLoginPage = (req, res) => {
    res.render('login/login');
}

const postLoginPage = async (req, res) => {
    let parameters = {
        u_id: req.body.inputid,
        u_pw: crypto.createHash('sha512').update(req.body.inputpw).digest('base64')
    }
    console.log(parameters);
    let accessToken;
    let refreshToken;

    try {
        const db_data = await loginDAO.login(parameters)
        if(db_data[0].is_admin == 0) {
            res.send('<script>alert(`관리자의 승인을 기다리는 중입니다.`); location.href=`/login`</script>')
        } else {
            if (db_data[0] !== undefined) {
                const user = {
                    id: db_data[0].u_id,
                    name: db_data[0].u_name,
                    isAd: db_data[0].is_admin
                }
    
                accessToken = jwt.sign({ user: user }, key, { expiresIn: '1h' });
                refreshToken = jwt.sign({ user: user }, key, { expiresIn: '1d' });
    
                const parameters = {
                    refreshToken,
                    u_id: db_data[0].u_id
                }
    
                try {
                    await loginDAO.insertToken(parameters);
                    res.status(202).cookie("user", accessToken, {
                        expires: new Date(Date.now() + 3600000),
                        // httpOnly: true
                    });
                    res.status(200).cookie("refreshToken", refreshToken, {
                        expires: new Date(Date.now() + (3600000 * 24)),
                        // httpOnly: true
                    }).send({state: "login", name: user.name});
                } catch (err) {
                    console.log(err);
                }
            } else {
                res.send('<script>alert(`정보가 일치하지 않습니다.`); location.href=`/login`</script>')
            }
        }
    } catch (err) {
        console.log(err);
    }
}

//------------------logout
const logout = (req, res) => {
    res.clearCookie('user');
    res.clearCookie('refreshToken');
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
        email
    }
    console.log(parameters);
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
    // let output = bcrypt.hashSync(pw, 10);
    let output = crypto.createHash('sha512').update(pw).digest('base64')

    let parameters = {
        u_id: id,
        u_pw: output,
        u_name: name,
        u_email: email,
        u_phone: phone,
        u_date: datetime,
        is_admin: 0
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
    let chk_id = req.body.input_id;
    let parameters = {
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

const signOut = async (req, res) => {
    let parameters = {
        u_id : req.body.jwtid
    }
    console.log(parameters);
    await loginDAO.signOut(parameters);
    res.redirect('/login/logout')
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
    postIdCheck,
    signOut
}