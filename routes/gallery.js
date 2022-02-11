var express = require('express');
var router = express.Router();
const uploadWithOriginalFilename = require('../middleware/multer');
const galleryCtrl = require('../controller/galleryCtrl');
const {notice} = require('../middleware/test'); 

router.get('/write', notice, galleryCtrl.getWrite);
router.post('/insert_write', notice, uploadWithOriginalFilename.uploadGallery.array('attachments'), galleryCtrl.postWrite);

router.get('/update/:num', notice, galleryCtrl.getUpdate);
router.post('/update_data', notice, uploadWithOriginalFilename.uploadGallery.array('attachments'), galleryCtrl.postUpdate);

router.post('/delete', notice, galleryCtrl.deleteGallery);

router.get('/', galleryCtrl.galleryPage);

router.get('/detail', galleryCtrl.galleryDetail);

module.exports = router;