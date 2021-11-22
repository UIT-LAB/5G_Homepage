var express = require('express');
var router = express.Router();
const loginCtrl = require('../controller/loginCtrl');

router.get('/', loginCtrl.getLoginPage);

router.post('/', loginCtrl.postLoginPage);
//------------------logout
router.get('/logout', loginCtrl.logout);

//----------- findID
router.get('/findId', loginCtrl.getFindId);

router.post('/findId', loginCtrl.postFindId);

//----------- findPW
router.get('/findPw', loginCtrl.getFindPw);

router.post('/changePw', loginCtrl.postChangePw);
router.post('/pwCheck', loginCtrl.postPwCheck);

//----------- signUp
router.get('/signUp', loginCtrl.getSignUp);
router.post('/signup_data', loginCtrl.postSignUp);

router.get('/idcheck', loginCtrl.getIdCheck);
router.post('/idcheck', loginCtrl.postIdCheck);

module.exports = router;