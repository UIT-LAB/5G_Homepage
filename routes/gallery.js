var express = require('express');
var router = express.Router();
const uploadWithOriginalFilename = require('../middleware/multer');
const galleryCtrl = require('../controller/galleryCtrl');
const {notice} = require('../middleware/test'); 

router.get('/write', notice, galleryCtrl.getWrite);
router.post('/insert_write', notice, uploadWithOriginalFilename.uploadGallery.array('attachments'), galleryCtrl.postWrite);

router.get('/update', galleryCtrl.getUpdate); // notice,
router.post('/update_data',uploadWithOriginalFilename.uploadGallery.array('files'), galleryCtrl.postUpdate); //notice

router.post('/delete',  galleryCtrl.deleteGallery); //notice,

router.get('/', galleryCtrl.galleryPage);

router.get('/detail', galleryCtrl.galleryDetail);

module.exports = router;