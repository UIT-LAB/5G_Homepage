const url = require('url');
const {get_writter} = require('../model/researchDAO');

const test = async (req, res, next) => {
    if(req.body.jwtid == undefined || req.body.jwtname == undefined) {
        res.send('<script>alert(`로그인이 되어있지 않습니다.`); location.href = `/login`</script>');
    } else if(req.body.jwtid != undefined || req.body.jwtname != undefined){
        const url = req.url;
        const slice = url.split('/');
        console.log(req.url);
        let parameters = {
            tid : req.params.num,
            table : slice[1]
        }
        const writter = await get_writter(parameters);
        console.log(writter);
        if(req.body.jwtid == writter[0].writter) {
            next();
        } else {
            // next();
            res.send(`<script>alert('작성자만 수정 및 삭제가 가능합니다'); history.back()</script>`);
        }
    }
}

module.exports = {
    test
}