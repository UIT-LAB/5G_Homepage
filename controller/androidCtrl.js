const androidDAO = require('../model/androidDAO');
const loginDAO = require('../model/loginDAO');
const jwt = require('jsonwebtoken');
const key = require('../routes/auth/key');
const crypto = require('crypto');

//-------board-------
const notice = async (req, res) => {
    try {
        const db_data = await androidDAO.noticeDB();
        console.log(db_data);
        res.send({ result: db_data });
    } catch (err) {
        console.log(err);
    }
}

const gallery = async (req, res) => {
    try {
        const db_data = await androidDAO.galleryDB();
        console.log(db_data);
        res.send({ result: db_data });
    } catch (err) {
        console.log(err);
    }
}

const member = async (req, res) => {
    let student = "참여학생"
    let enterprise = "기업체"
    let parameters = {
        student,
        enterprise
    }

    try {
        const db_data = await androidDAO.memberDB(parameters);
        res.send({ result: db_data });
    } catch (err) {
        console.log(err);
    }
}

const thesis = async (req, res) => {
    try {
        const db_data = await androidDAO.thesisDB();
        res.send({ result: db_data });
    } catch (err) {
        console.log(err);
    }
}

const license = async (req, res) => {
    try {
        const db_data = await androidDAO.licenseDB();
        res.send({ result: db_data });
    } catch (err) {
        console.log(err);
    }
}

const technology = async (req, res) => {
    try {
        const db_data = await androidDAO.technologyDB();
        res.send({ result: db_data });
    } catch (err) {
        console.log(err);
    }
}

const standard = async (req, res) => {
    try {
        const db_data = await androidDAO.standardDB();
        res.send({ result: db_data });
    } catch (err) {
        console.log(err);
    }
}

const software = async (req, res) => {
    try {
        const db_data = await androidDAO.softwareDB();
        res.send({ result: db_data });
    } catch (err) {
        console.log(err);
    }
}

//-------auth-------
const login = async (req, res) => {
    let parameters = {
        u_id: req.body.inputid,
        u_pw: crypto.createHash('sha512').update(req.body.inputpw).digest('base64')
    }
    console.log(parameters);
    let accessToken;
    let refreshToken;

    try {
        const db_data = await loginDAO.login(parameters)
        if (db_data[0].is_admin == 0) {
            res.send({ message: "관리자의 승인을 기다리는 중입니다." })
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
                    }).send({ state: "login", result: db_data });
                } catch (err) {
                    console.log(err);
                }
            } else {
                res.send({ message: "정보가 일치하지 않습니다." })
            }
        }
    } catch (err) {
        console.log(err);
    }
}

const logout = (req, res) => {
    res.clearCookie('user');
    res.clearCookie('refreshToken');
    res.send({ messeage: "logout" });
}

const checkPw = async (req, res) => {
    const output = crypto.createHash('sha512').update(req.body.pw).digest('base64');
    let parameters = {
        pw: output,
        refreshToken: req.cookies.refreshToken
    }
    try {
        const db_data = await androidDAO.check_pw(parameters);
        if (db_data[0].isChk === 1) {
            res.send({ message: 1 });
        } else {
            res.send({ message: 0 });
        }
    } catch (err) {
        console.log(err);
    }
}

const changePw = async (req, res) => {
    const pw = crypto.createHash('sha512').update(req.body.pw).digest('base64');
    const confirmPw = crypto.createHash('sha512').update(req.body.confirmPw).digest('base64');

    if (pw === confirmPw) {
        const parameters = {
            output: confirmPw,
            u_id: req.body.u_id
        }
        try {
            await loginDAO.pwCheck(parameters);
            res.send({message: pwUpdate});
        } catch (err) {
            console.log(err);
        }
    } else {

    }
}

module.exports = {
    notice,
    gallery,
    member,
    thesis,
    license,
    technology,
    standard,
    software,
    login,
    logout,
    checkPw,
    changePw
}