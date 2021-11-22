var express = require('express');
var router = express.Router();
const researchCtrl = require('../controller/researchCtrl');

router.get('/thesis/:num', researchCtrl.thesis);

router.get('/thesis/detail/:num', researchCtrl.thesisDetail);

router.get('/license/:num', researchCtrl.license);

router.get('/license/detail/:num', researchCtrl.licenseDetail);

router.get('/software/:num', researchCtrl.software);

router.get('/software/detail/:num', researchCtrl.softwareDetail);

router.get('/standard/:num', researchCtrl.standard);

router.get('/standard/detail/:num', researchCtrl.standardDetail);

router.get('/technology/:num', researchCtrl.technology);

router.get('/technology/detail/:num', researchCtrl.technologyDetail);

module.exports = router;