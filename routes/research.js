const express = require('express');
const router = express.Router();
const researchCtrl = require('../controller/researchCtrl');

router.get('/thesis/getThesisWrite', researchCtrl.getThesisWrite);

router.get('/thesis/:num', researchCtrl.thesis);

router.get('/thesis/detail/:num', researchCtrl.thesisDetail);

router.get('/thesis/update/:num', researchCtrl.getThesisUpdate);

router.post('/thesis/write', researchCtrl.thesisWrite);

router.put('/thesis/update/:num', researchCtrl.patchThesis);

router.put('/thesis/delete/:num', researchCtrl.deleteThesis);

router.get('/license/:num', researchCtrl.license);

router.get('/license/detail/:num', researchCtrl.licenseDetail);

router.get('/software/:num', researchCtrl.software);

router.get('/software/detail/:num', researchCtrl.softwareDetail);

router.get('/standard/:num', researchCtrl.standard);

router.get('/standard/detail/:num', researchCtrl.standardDetail);

router.get('/technology/:num', researchCtrl.technology);

router.get('/technology/detail/:num', researchCtrl.technologyDetail);

router.post('/license/search', researchCtrl.searchLicense);

router.post('/software/search', researchCtrl.searchSoftware);

router.post('/technology/search', researchCtrl.searchTechnology);

router.post('/standard/search', researchCtrl.searchStandard);

module.exports = router;