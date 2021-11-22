var express = require('express');
var router = express.Router();

const memCtrl = require('../controller/memberCtrl');

router.get('/:num', memCtrl.member);

module.exports = router;