const db = require('../config/db');
const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');
const key = require('../routes/auth/key');
const researchDAO = require('../model/researchDAO');
let jwtname;

const thesis = (req, res) => {
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
    researchDAO.thesis_page()
        .then((db_data) => {
            res.render('research/thesis', { result: db_data, t_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        })
}

const thesisDetail = (req, res) => {
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
    let parameters = {
        tid: req.params.num
    }

    researchDAO.thesis_detail(parameters)
        .then((db_data) => {
            res.render('research/thesis_detail', { result: db_data, t_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        })
}

const license = (req, res) => {
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

    researchDAO.license_page()
        .then((db_data) => {
            res.render('research/license', { result: db_data, l_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        })
}

const licenseDetail = (req, res) => {
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
    let parameters = {
        lid: req.params.num
    }
    researchDAO.license_detail(parameters)
        .then((db_data) => {
            res.render('research/license_detail', { result: db_data, l_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
}

const software = (req, res) => {
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

    researchDAO.software_page()
        .then((db_data) => {
            res.render('research/software', { result: db_data, s_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        })
}

const softwareDetail = (req, res) => {
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
    let parameters = {
        sid: req.params.num
    }
    researchDAO.software_detail(parameters)
        .then((db_data) => {
            res.render('research/software_detail', { result: db_data, s_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
}

const standard = (req, res) => {
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

    researchDAO.standard_page()
        .then((db_data) => {
            res.render('research/standard', { result: db_data, st_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        })
}

const standardDetail = (req, res) => {
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
    let parameters = {
        stid: req.params.num
    }
    researchDAO.standard_detail(parameters)
        .then((db_data) => {
            res.render('research/standard_detail', { result: db_data, s_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user })
        })
        .catch((err) => {
            throw err
        })
}

const technology = (req, res) => {
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
    researchDAO.technology_page()
        .then((db_data) => {
            res.render('research/technology', { result: db_data, t_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        })
}

const technologyDetail = (req, res) => {
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
    let parameters = {
        tid: req.params.num
    }

    researchDAO.technology_detail(parameters)
        .then((db_data) => {
            res.render('research/technology_detail', { result: db_data, s_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        })
}

module.exports = {
    thesis,
    thesisDetail,
    license,
    licenseDetail,
    software,
    softwareDetail,
    standard,
    standardDetail,
    technology,
    technologyDetail
}