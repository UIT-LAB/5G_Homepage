const jwt = require('jsonwebtoken');
const key = require("../routes/auth/key");
let jwtname;

const introRoot = (req, res) => {
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
    res.render('intro/intro', { name: jwtname, cookie: req.cookies.user });
}

const getBusiness = (req, res) => {
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
    res.render('intro/business', { name: jwtname, cookie: req.cookies.user });
}

const getOrganization = (req, res) => {
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
    res.render('Intro/organization', { name: jwtname, cookie: req.cookies.user });
}

module.exports = {
    introRoot,
    getBusiness,
    getOrganization
}