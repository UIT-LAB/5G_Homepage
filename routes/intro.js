var express = require('express');
var router = express.Router();
const introCtrl = require('../controller/introCtrl');


router.get('/', introCtrl.introRoot);

router.get('/business', introCtrl.getBusiness);

router.get('/organization', introCtrl.getOrganization);

module.exports = router;