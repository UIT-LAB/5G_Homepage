var express = require('express');
var router = express.Router();
var db = require('../config/db')
var dayjs = require('dayjs')
const jwt = require('jsonwebtoken');
const key = require("./auth/key");
var fs = require('fs');
const uploadWithOriginalFilename = require('../middleware/multer');
let jwtname, jwtid;
const boardCtrl = require('../controller/boardCtrl');

//------------------------------------notice
router.get('/notice/:num', boardCtrl.notice);

router.get('/notice/detail/:num', boardCtrl.noticeDetail);

router.get('/notice_write', boardCtrl.getNoticeWrite);

router.post('/notice/insert_write', boardCtrl.postNoticeWrite);

router.get('/notice/update/:num', boardCtrl.getUpdateNotice);

router.post('/notice/update_data', boardCtrl.postUpdateNotice);

router.post('/notice/delete', boardCtrl.deleteNotice);

//------------------------------- post
router.get('/post/:num', boardCtrl.postPage);

router.get('/post/detail/:num', boardCtrl.postDeail);

router.get('/post_write', boardCtrl.getPostWrite);

router.post('/post/insert_write', uploadWithOriginalFilename.uploadBoard.array('attachments'), boardCtrl.postPostWrite);

router.get('/post/update/:num', boardCtrl.getPostUpdate);

router.post('/post/update_data', uploadWithOriginalFilename.uploadBoard.array('attachments'), boardCtrl.postPostUpdate);

router.post('/post/delete', boardCtrl.postDelete);

//------------------------------question
router.get('/question/:num', boardCtrl.questionPage);

router.get('/question/detail/:num', boardCtrl.questionDetail);

router.get('/question_write', boardCtrl.getQuestionWrite);

router.post('/question/insert_write', boardCtrl.postQuestionWrite);

router.get('/question/update/:num', boardCtrl.getQuestionUpdate);

router.post('/question/update_data', boardCtrl.postQuestionUpdate);

router.post('/question/admin_comment', boardCtrl.questionAdminComment);

router.post('/question/admin_comment_delete', boardCtrl.questionAdminCommentDelete);

router.post('/question/delete', boardCtrl.questionDelete);

module.exports = router;
