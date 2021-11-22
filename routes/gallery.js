var express = require('express');
var router = express.Router();
const uploadWithOriginalFilename = require('../middleware/multer');
const galleryCtrl = require('../controller/galleryCtrl');

router.get('/write', galleryCtrl.getWrite);
router.post('/insert_write', uploadWithOriginalFilename.uploadGallery.array('attachments'), galleryCtrl.postWrite);

router.get('/update/:num', galleryCtrl.getUpdate);
router.post('/update_data', uploadWithOriginalFilename.uploadGallery.array('attachments'), galleryCtrl.postUpdate);

router.post('/delete', galleryCtrl.deleteGallery);

router.get('/:num', galleryCtrl.galleryPage);

router.get('/detail/:num', galleryCtrl.galleryDetail);

module.exports = router;