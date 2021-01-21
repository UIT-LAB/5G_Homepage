var express = require('express');
var router = express.Router();
var db = require('../config/db')
var dayjs =  require('dayjs')

router.get('/', function(req, res, next) {
    res.render('board');
});

router.get('/question', function(req, res, next) {
    res.render('question');
});

router.get('/post', function(req, res, next) {
    res.render('post');
});

router.get('/notice', function(req, res, next) {
    res.render('notice');
});

/*  insert문 
router.post('/board_add', function(req, res, next){
    let date = new dayjs();
    var body = req.body;
    var title = body.board_title;
    var content = body.board_content;
    var writer = body.board_writer;
    var write_date = date.format('YYYY-MM-DD HH:mm:ss');
    var sql = {b_title:title, b_content:content , b_writer:writer, b_write_date : write_date};

    db.query('INSERT INTO Board SET ?', sql , function (error, result) {
        if(error) {
            throw error;
        }    
        else {
            console.log("게시글 작성");
            res.redirect("/board");
        };
    });
})
*/
module.exports = router;
