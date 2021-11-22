const db = require('../config/db');
const dayjs = require('dayjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const key = require("../routes/auth/key");
const indexDAO = require('../model/indexDAO');
let jwtname, jwtid;

const rootPage = (req, res) => {
    if (req.cookies.user != undefined) {
        let token = req.cookies.user;
        jwt.verify(token, key, (err, decode) => {
            if (err) {
                res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
            }
            else {
                jwtname = decode.user.name
            }
        })
    }
    indexDAO.select_Gallery()
        .then((db_data) => {
            g_result = db_data;
            indexDAO.select_Research()
                .then((db_data) => {
                    r_result = db_data;
                    indexDAO.select_Notice()
                        .then((db_data) => {
                            n_result = db_data;
                            indexDAO.select_License()
                                .then((db_data) => {
                                    p_result = db_data;
                                    res.render('index', { 'g_result': g_result, 'r_result': r_result, 'n_result': n_result, dayjs, 'name': jwtname, cookie: req.cookies.user });
                                })
                                .catch((err) => {
                                    throw err;
                                })
                        })
                        .catch((err) => {
                            throw err;
                        })
                })
                .catch((err) => {
                    throw err;
                })
        })
        .catch((err) => {
            throw err;
        })
}

const profile = (req, res) => {
    if (req.cookies.user != undefined) {
        let token = req.cookies.user;
        jwt.verify(token, key, (err, decode) => {
            if (err) {
                res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
            }
            else {
                jwtname = decode.user.name
                jwtid = decode.user.id
            }
        })
    }
    db.query(`select * from UserInfo where u_id ='${jwtid}'`, function (error, result) {
        if (error) {
            throw error;
        }
        else {
            res.render('login/profile', { result: result, name: jwtname, cookie: req.cookies.user, dayjs });
        }
    });
}

const getUpdateProfile = (req, res) => {
    if (req.cookies.user != undefined) {
        let token = req.cookies.user;
        jwt.verify(token, key, (err, decode) => {
            if (err) {
                res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
            }
            else {
                jwtname = decode.user.name
                jwtid = decode.user.id
            }
        })
    }
    db.query(`select * from UserInfo where u_id = '${jwtid}'`, function (error, result) {
        if (error) {
            throw error;
        }
        else {
            res.render('login/profile_update', { result: result, name: jwtname, cookie: req.cookies.user, dayjs });
        };
    });
}

const postUpdateProfile = (req, res) => {
    var profile_name = req.body.profile_name;
    var profile_phone = req.body.profile_phone;
    var profile_email = req.body.profile_email;
    var profile_image = req.file.filename;

    if (req.cookies.user != undefined) {
        let token = req.cookies.user;
        jwt.verify(token, key, (err, decode) => {
            if (err) {
                res.send('<script>alert(`세션이 만료되었습니다.`); location.href=`/login`</script>')
            }
            else {
                jwtname = decode.user.name
                jwtid = decode.user.id
            }
        })
    }

    db.query(`Update UserInfo set u_name = '${profile_name}', u_phone = '${profile_phone}', u_email = '${profile_email}', u_image = '${profile_image}' where u_id = '${jwtid}'`, function (error, result) {
        if (error) {
            throw error;
        }
        else {
            console.log(profile_image);
            res.send('<script>alert(`정보가 수정되었습니다.`); location.href=`/profile`</script>')
        };
    });
}

const getProfilePassword = (req, res) => {
    res.render('login/profile_changePw');
}

const postProfilePassword = (req, res) => {
    var currentpw = req.body.currentpw;
    var changepw = req.body.changepw;
    var currentoutput = crypto.createHash('sha512').update(currentpw).digest('base64')
    var changeoutput = crypto.createHash('sha512').update(changepw).digest('base64')
    db.query(`Select EXISTS (Select * from UserInfo where u_pw = '${currentoutput}') as isChk`, function (error, result) {
        if (error) {
            throw error;
        }
        else {
            if (result[0].isChk == 0) {
                res.send('<script>alert(`비밀번호가 일치하지 않습니다.`); history.back();</script>')
            }
            else if (result[0].isChk == 1) {
                db.query(`Update UserInfo set u_pw = '${changeoutput}' where u_pw = '${currentoutput}'`, function (error, result) {
                    if (error) {
                        throw error;
                    }
                    else {
                        res.redirect('/profile');
                    }
                });
            }
        };
    });
}

module.exports = {
    rootPage,
    profile,
    getUpdateProfile,
    postUpdateProfile,
    getProfilePassword,
    postProfilePassword
}