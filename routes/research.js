const express = require('express');
const router = express.Router();
const thesisCtrl = require('../controller/research/thesisCtrl');
const licenseCtrl = require('../controller/research/licenseCtrl');
const softwareCtrl = require('../controller/research/softwareCtrl');
const standardCtrl = require('../controller/research/standardCtrl');
const technologyCtrl = require('../controller/research/technologyCtrl');
const {research, write} = require('../middleware/test');

//-----thesis-----
router.get('/thesis/getThesisWrite', write, thesisCtrl.getThesisWrite);

router.get('/thesis/:num', thesisCtrl.thesis);

router.get('/thesis/detail/:num', thesisCtrl.thesisDetail);

router.get('/thesis/update/:num', research, thesisCtrl.getThesisUpdate);

router.post('/thesis/write', write, thesisCtrl.thesisWrite);

router.put('/thesis/update/:num', research, thesisCtrl.updateThesis);

router.put('/thesis/delete/:num', research, thesisCtrl.deleteThesis);

router.get('/android/thesis', thesisCtrl.androidThesis);

//-----license-----
router.get('/license/:num', licenseCtrl.license);

router.get('/license/detail/:num', licenseCtrl.licenseDetail);

router.get('/license/getLicenseWrite', write, licenseCtrl.getLicenseWrite);

router.get('/license/update/:num', research, licenseCtrl.getLicenseUpdate);

router.post('/license/write', write, licenseCtrl.licenseWrite);

router.put('/license/update/:num', research, licenseCtrl.updateLicense);

router.put('/license/delete/:num', research, licenseCtrl.deleteLicense);

//-----software-----
router.get('/software/:num', softwareCtrl.software);

router.get('/software/detail/:num', softwareCtrl.softwareDetail);

router.get('/software/getLicenseWrite', write, softwareCtrl.getSoftwareWrite);

router.get('/software/update/:num', research, softwareCtrl.getSoftwareUpdate);

router.post('/software/write', write, softwareCtrl.softwareWrite);

router.put('/software/update/:num', research, softwareCtrl.updateSoftware);

router.put('/software/delete/:num', research, softwareCtrl.deleteSoftware);

//-----standard-----
router.get('/standard/:num', standardCtrl.standard);

router.get('/standard/detail/:num', standardCtrl.standardDetail);

router.get('/standard/getLicenseWrite', write, standardCtrl.getStandardWrite);

router.get('/standard/update/:num', research, standardCtrl.getStandardUpdate);

router.post('/standard/write', write, standardCtrl.standardWrite);

router.put('/standard/update/:num', research, standardCtrl.updateStandard);

router.put('/standard/delete/:num', research, standardCtrl.deleteStandard);

//-----technology-----
router.get('/technology/:num', technologyCtrl.technology);

router.get('/technology/detail/:num', technologyCtrl.technologyDetail);

router.get('/standard/getLicenseWrite', write, technologyCtrl.getTechnologyWrite);

router.get('/standard/update/:num', research, technologyCtrl.getTechnologyUpdate);

router.post('/standard/write', write, technologyCtrl.technologyWrite);

router.put('/standard/update/:num', research, technologyCtrl.updateTechnology);

router.put('/standard/delete/:num', research, technologyCtrl.deleteTechnology);

module.exports = router;