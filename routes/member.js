var express = require('express');
var router = express.Router();

const memCtrl = require('../controller/memberCtrl');

router.get('/', memCtrl.member);

router.get('/member/android/memberAll', memCtrl.member);

module.exports = router;