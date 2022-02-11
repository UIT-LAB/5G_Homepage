const { get_writter } = require('../model/researchDAO');

const research = async (req, res, next) => {
    if (req.body.jwtid == undefined || req.body.jwtname == undefined) {
        res.send('<script>alert(`로그인이 되어있지 않습니다.`); location.href = `/login`</script>');
    } else if (req.body.jwtid != undefined || req.body.jwtname != undefined) {
        const url = req.url;
        const slice = url.split('/');
        let parameters = {
            tid: req.params.num,
            table: slice[1]
        }
        const writter = await get_writter(parameters);
        if (req.body.jwtid == writter[0].writter || req.body.isAd == 2) {
            next();
        } else {
            res.send(`<script>alert('작성자와 관리자만 수정 및 삭제가 가능합니다'); history.back()</script>`);
        }
    }
}

const write = async (req, res, next) => {
    if (req.body.jwtid == undefined || req.body.jwtname == undefined) {
        res.send('<script>alert(`로그인이 되어있지 않습니다.`); location.href = `/login`</script>');
        next();
    } else {
        next();
    }
}

const notice = async (req, res, next) => {
    if (req.body.jwtid == undefined || req.body.jwtname == undefined) {
        res.send('<script>alert(`로그인이 되어있지 않습니다.`); location.href = `/login`</script>');
    } else if (req.body.jwtid != undefined || req.body.jwtname != undefined) {
        if (req.body.isAd == 2) {
            next();
        } else {
            res.send(`<script>alert('관리자만 추가, 수정 및 삭제가 가능합니다'); history.back()</script>`);
        }
    }
}

module.exports = {
    research,
    notice,
    write
}