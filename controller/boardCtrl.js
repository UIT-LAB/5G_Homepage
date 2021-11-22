const db = require('../config/db');
const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');
const key = require("../routes/auth/key");
const fs = require('fs');
const boardDAO = require('../model/boardDAO');
let jwtname, jwtid;

//------------------------------------notice
const notice = (req, res) => {
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

    boardDAO.notice_page()
        .then((db_data) => {
            res.render('board/notice', { result: db_data, n_num: req.params.num, max_value: 15, dayjs, id: jwtid, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        })
}

const noticeDetail = (req, res) => {
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
    let parameters = {
        nid: req.params.num
    }

    boardDAO.notice_detail(parameters)
        .then((db_data) => {
            if (db_data[0] !== undefined) {
                boardDAO.notice_views(parameters)
                    .then(() => {
                        db_data[0].n_view++;
                        res.render('board/notice_detail', { result: db_data, n_num: req.params.num, max_value: 15, dayjs, id: jwtid, name: jwtname, cookie: req.cookies.user });
                    })
                    .catch((err) => {
                        throw err;
                    })
            }

        })
        .catch((err) => {
            throw err;
        })
}

const getNoticeWrite = (req, res) => {
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
    res.render('board/notice_write', { name: jwtname, cookie: req.cookies.user });
}

const postNoticeWrite = (req, res) => {
    var date = new dayjs();
    var title = req.body.noti_title;
    var content = req.body.noti_content;
    var datetime = date.format('YYYY-MM-DD HH:mm:ss');
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
    let parameters = {
        n_title: title,
        n_content: content,
        n_writer: jwtname,
        n_writer_date: datetime,
        n_view: 0
    };

    boardDAO.notice_write(parameters)
    .then(() => {
        res.redirect("/board/notice/1");
    })
    .catch((err) => {
        throw err;
    })
}

const getUpdateNotice = (req, res) => {
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
    let parameters = {
        nid : req.params.num
    }
    boardDAO.get_update_notice(parameters)
    .then((db_data) => {
        res.render('board/notice_update', { result: db_data, n_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
    })
}

const postUpdateNotice = (req, res) => {
    let parameters = {
        title : req.body.noti_title,
        content : req.body.noti_content,
        titlex : req.body.titlex,
        writerx : req.body.writerx,
        contentx : req.body.contentx,
    }

    boardDAO.post_update_notice(parameters)
    .then(() => {
        res.redirect('/board/notice/1');
    })
    .catch((err) => {
        throw err;
    })
}

const deleteNotice = (req, res) => {
    let nid = req.body.nidx;
    let parameters = {
        nid
    }

    boardDAO.delete_notice(parameters)
    .then(() => {
        res.redirect("/board/notice/1");
    })
    .catch((err) => {
        throw err;
    })
}

//------------------------------- post
const postPage = (req, res) => {
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

    boardDAO.post_page()
        .then((db_data) => {
            res.render('board/post', { result: db_data, p_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
        })
        .catch((err) => {
            throw err;
        })
}

const postDeail = (req, res) => {
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
    
    let parameters = {
        pid : req.params.num
    }

    boardDAO.post_detail(parameters)
    .then((db_data) => {
        if(db_data[0] !== undefined) {
            boardDAO.post_view(parameters)
            .then(() => {
                db_data[0].p_view++;
            })
            .catch((err) => {
                throw err;
            })
        }
        res.render('board/post_detail', { result: db_data, p_num: req.params.num, max_value: 15, dayjs, id: jwtid, name: jwtname, cookie: req.cookies.user });
    })
    .catch((err) => {
        throw err;
    })
}

const getPostWrite = (req, res) => {
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
    res.render('board/post_write', { name: jwtname, cookie: req.cookies.user });
}

const postPostWrite = (req, res) => {
    let date = new dayjs();
    let title = req.body.post_title;
    let content = req.body.post_content;
    let datetime = date.format('YYYY-MM-DD HH:mm:ss');
    let files = req.files;
    let string = "";
    for (let k in files) {
        console.log(k + " : " + files[k].filename);
        string += files[k].filename + ",";
    }
    let parameters = { 
        p_title: title, 
        p_content: content, 
        p_writer: jwtname, 
        p_writer_date: datetime, 
        p_view: 0, 
        p_file: string 
    };

    boardDAO.write_post(parameters)
    .then(() => {
        res.redirect('/board/post/1');
    })
    .catch((err) => {
        throw err;
    })
}

const getPostUpdate = (req, res) => {
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
    let parameters = {
        pid : req.params.num
    }

    boardDAO.get_update_post(parameters)
    .then((db_data) => {
        res.render('board/post_update', { result: db_data, p_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
    })
    .catch((err) => {
        throw err;
    })
}

const postPostUpdate = (req, res) => {
    // let title = req.body.post_title;
    // let content = req.body.post_content;
    // let titlex = req.body.titlex;
    // let contentx = req.body.contentx;

    let files = req.files;
    let string = "";
    for (let k in files) {
        console.log(k + " : " + files[k].filename);
        string += files[k].filename + ",";
    }
    let parameters = {
        title : req.body.post_title,
        content : req.body.post_content,
        titlex : req.body.titlex,
        contentx : req.body.contentx,
        string
    }

    boardDAO.post_update_post(parameters)
    .then(() => {
        res.redirect('/board/post/1');
    })
    .catch((err) => {
        throw err;
    })
}

const postDelete = (req, res) => {
    let file = req.body.filex;
    let fileSplit = file.split(',');

    for (var j = 0; j < fileSplit.length; j++) {
        fs.unlink(__dirname + "/../public/images/board/" + fileSplit[j], function (err) {
            if (err) {
                console.error(err);
            }
            else {
                console.log('Delete Success' + j);
            }
        })
    }

    let parameters = {
        pid : req.body.pidx
    }

    boardDAO.delete_post(parameters) 
    .then(() => {
        res.redirect('/board/post/1');
    })
    .catch((err) => {
        throw err;
    })
}

//------------------------------question
const questionPage = (req, res) => {
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
    boardDAO.question_page()
    .then((db_data) => {
        res.render('board/question', {result : db_data, q_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user});
    })
    .catch((err) => {
        throw err;
    })
}

const questionDetail = (req, res) => {
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

    let parameters = {
        qid : req.params.num
    }

    boardDAO.question_detail(parameters)
    .then((db_data) => {
        if(db_data[0] !== undefined) {
            res.render('board/question_detail', { result: db_data, q_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user, id: jwtid });
        } else {
            res.render('error');
        }
    })
    .catch((err) => {
        throw err;
    })
}

const getQuestionWrite = (req, res) => {
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
    res.render('board/question_write', { name: jwtname, cookie: req.cookies.user });
}

const postQuestionWrite = (req, res) => {
    let date = new dayjs();

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

    let parameters = {
        q_title : req.body.ques_title,
        q_content : req.body.ques_content,
        q_writer : jwtname,
        q_writer_date : date.format('YYYY-MM-DD HH:mm:ss')
    }

    boardDAO.post_write_question(parameters)
    .then(() => {
        res.redirect('/board/question/1');
    })
    .catch((err) => {
        throw err;
    })
}

const getQuestionUpdate = (req, res) => {
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

    let parameters = {
        qid : req.params.num
    }

    boardDAO.get_update_question(parameters)
    .then((db_data) => {
        res.render('board/question_update', { result: db_data, q_num: req.params.num, max_value: 15, dayjs, name: jwtname, cookie: req.cookies.user });
    })
    .catch((err) => {
        throw err;
    })
}

const postQuestionUpdate = (req, res) => {
    let parameters = {
        title : req.body.ques_title,
        content : req.body.ques_content,
        titlex : req.body.titlex,
        contentx : req.body.contentx
    }

    boardDAO.post_update_question(parameters)
    .then(() => {
        res.redirect('/board/question/1');
    })
    .catch((err) => {
        throw err;
    })
}

const questionAdminComment = (req, res) => {
    let parameters = {
        titlex : req.body.titlex,
        contentx : req.body.contentx,
        adminx : req.body.ques_comment,
        admindatex : dayjs().format('YY.MM.DD')
    }

    boardDAO.question_comment(parameters) 
    .then(() => {
        res.redirect('/board/question/1');
    })
    .catch((err) => {
        throw err;
    })
}

const questionAdminCommentDelete = (req, res) => {
    let parameters = {
        qid : req.body.qidx
    }

    boardDAO.delete_question_comment(parameters)
    .then(() => {
        res.redirect('/board/question/1');
    })
    .catch((err) => {
        throw err;
    })
}

const questionDelete = (req, res) => {
    let parameters = {
        qid : req.body.qidx
    }

    boardDAO.delete_question(parameters)
    .then(() => {
        res.redirect('/board/question/1');
    })
    .catch((err) => {
        throw err;
    })
}

module.exports = {
    notice,
    noticeDetail,
    getNoticeWrite,
    postNoticeWrite,
    getUpdateNotice,
    postUpdateNotice,
    deleteNotice,
    postPage,
    postDeail,
    getPostWrite,
    postPostWrite,
    getPostUpdate,
    postPostUpdate,
    postDelete,
    questionPage,
    questionDetail,
    getQuestionWrite,
    postQuestionWrite,
    getQuestionUpdate,
    postQuestionUpdate,
    questionAdminComment,
    questionAdminCommentDelete,
    questionDelete
}