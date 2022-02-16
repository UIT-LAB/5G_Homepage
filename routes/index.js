var express = require('express');
var router = express.Router();
const uploadWithOriginalFilename = require('../middleware/multer');

const indexCtrl = require('../controller/indexCtrl');
  
router.get('/', indexCtrl.rootPage);

router.get('/profile', indexCtrl.profile);

router.get('/profile_update', indexCtrl.getUpdateProfile);

router.post('/profile_update', uploadWithOriginalFilename.uploadIndex.single('attachment'), indexCtrl.postUpdateProfile);

router.get('/profile_password', indexCtrl.getProfilePassword);

router.post('/profile_password', indexCtrl.postProfilePassword);


module.exports = router;