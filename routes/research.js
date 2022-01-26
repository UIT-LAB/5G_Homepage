const express = require('express');
const router = express.Router();
const thesisCtrl = require('../controller/research/thesisCtrl');
const licenseCtrl = require('../controller/research/licenseCtrl');
const softwareCtrl = require('../controller/research/softwareCtrl');
const standardCtrl = require('../controller/research/standardCtrl');
const technology = require('../controller/research/technologyCtrl');
const {test} = require('../middleware/test');

//-----thesis-----
router.get('/thesis/getThesisWrite', thesisCtrl.getThesisWrite);

router.get('/thesis/:num', thesisCtrl.thesis);

router.get('/thesis/detail/:num', thesisCtrl.thesisDetail);

router.get('/thesis/update/:num', test, thesisCtrl.getThesisUpdate);

router.post('/thesis/write', thesisCtrl.thesisWrite);

router.put('/thesis/update/:num', test, thesisCtrl.updateThesis);

router.put('/thesis/delete/:num', test, thesisCtrl.deleteThesis);

//-----license-----
router.get('/license/:num', licenseCtrl.license);

router.get('/license/detail/:num', licenseCtrl.licenseDetail);

router.get('/license/getLicenseWrite', licenseCtrl.getLicenseWrite);

router.get('/license/update/:num', test, licenseCtrl.getLicenseUpdate);

router.post('/license/write', licenseCtrl.licenseWrite);

router.put('/license/update/:num', test, licenseCtrl.updateLicense);

router.put('/license/delete/:num', test, licenseCtrl.deleteLicense);

//-----software-----
router.get('/software/:num', softwareCtrl.software);

router.get('/software/detail/:num', softwareCtrl.softwareDetail);

router.get('/software/getLicenseWrite', softwareCtrl.getSoftwareWrite);

router.get('/software/update/:num', test, softwareCtrl.getSoftwareUpdate);

router.post('/software/write', softwareCtrl.softwareWrite);

router.put('/software/update/:num', test, softwareCtrl.updateSoftware);

router.put('/software/delete/:num', test, softwareCtrl.deleteSoftware);

//-----standard-----
router.get('/standard/:num', standardCtrl.standard);

router.get('/standard/detail/:num', standardCtrl.standardDetail);

//-----technology-----
router.get('/technology/:num', technology.technology);

router.get('/technology/detail/:num', technology.technologyDetail);

module.exports = router;