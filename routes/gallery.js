var express = require('express');
var router = express.Router();
const uploadWithOriginalFilename = require('../middleware/multer');
const galleryCtrl = require('../controller/galleryCtrl');
const {notice} = require('../middleware/test'); 

router.get('/write', notice, galleryCtrl.getWrite); //notice,
router.post('/insert_write', notice, uploadWithOriginalFilename.uploadGallery.array('files'), galleryCtrl.postWrite); // notice, 

router.get('/update', notice, galleryCtrl.getUpdate); // notice,
router.post('/update_data', notice, uploadWithOriginalFilename.uploadGallery.array('files'), galleryCtrl.postUpdate); //notice

router.post('/delete', notice, galleryCtrl.deleteGallery); //notice,

router.get('/', galleryCtrl.galleryPage);
router.get('/app', galleryCtrl.galleryPage);

router.get('/detail', galleryCtrl.galleryDetail);

module.exports = router;