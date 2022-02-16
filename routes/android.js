const express = require('express');
const router = express.Router();
const androidCtrl = require('../controller/androidCtrl');
const middleware = require('../middleware/test');

//-------Board--------
router.get('/notice', androidCtrl.notice);

//-------Gallery--------
router.get('/gallery', androidCtrl.gallery);

//-------member--------
router.get('/member', androidCtrl.member);

//-------research-------
router.get('/thesis', androidCtrl.thesis);
router.get('/license', androidCtrl.license);
router.get('/technology', androidCtrl.technology);
router.get('/software', androidCtrl.software);
router.get('/standard', androidCtrl.standard);

//-------auth-------
router.post('/login', androidCtrl.login);
router.get('/logout', middleware.write, androidCtrl.logout);
router.post('/checkPw', middleware.write, androidCtrl.checkPw);
router.post('/changePw', middleware.write, androidCtrl.changePw);

module.exports = router;