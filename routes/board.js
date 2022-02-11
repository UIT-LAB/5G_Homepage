const express = require('express');
const router = express.Router();
// const uploadWithOriginalFilename = require('../middleware/multer');
const boardCtrl = require('../controller/boardCtrl');
const {notice} = require('../middleware/test');

//------------------------------------notice
// router.get('/notice/:num', boardCtrl.notice);
router.get('/notice', boardCtrl.notice);

router.get('/notice_main', boardCtrl.noticeForMain);

router.get('/notice/detail/:num', boardCtrl.noticeDetail);

router.get('/notice_write', notice, boardCtrl.getNoticeWrite);

router.post('/notice/insert_write', notice, boardCtrl.postNoticeWrite);

router.get('/notice/update/:num', notice, boardCtrl.getUpdateNotice);

router.post('/notice/update_data', notice, boardCtrl.postUpdateNotice);

router.post('/notice/delete', notice, boardCtrl.deleteNotice);

// //------------------------------- post
// router.get('/post/:num', boardCtrl.postPage);

// router.get('/post/detail/:num', boardCtrl.postDeail);

// router.get('/post_write', boardCtrl.getPostWrite);

// router.post('/post/insert_write', uploadWithOriginalFilename.uploadBoard.array('attachments'), boardCtrl.postPostWrite);

// router.get('/post/update/:num', boardCtrl.getPostUpdate);

// router.post('/post/update_data', uploadWithOriginalFilename.uploadBoard.array('attachments'), boardCtrl.postPostUpdate);

// router.post('/post/delete', boardCtrl.postDelete);

// //------------------------------question
// router.get('/question/:num', boardCtrl.questionPage);

// router.get('/question/detail/:num', boardCtrl.questionDetail);

// router.get('/question_write', boardCtrl.getQuestionWrite);

// router.post('/question/insert_write', boardCtrl.postQuestionWrite);

// router.get('/question/update/:num', boardCtrl.getQuestionUpdate);

// router.post('/question/update_data', boardCtrl.postQuestionUpdate);

// router.post('/question/admin_comment', boardCtrl.questionAdminComment);

// router.post('/question/admin_comment_delete', boardCtrl.questionAdminCommentDelete);

// router.post('/question/delete', boardCtrl.questionDelete);

module.exports = router;
