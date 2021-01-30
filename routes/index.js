var express = require('express');
var router = express.Router();
var db = require('../config/db');
var dayjs =  require('dayjs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var select_Gallery = `select * from Gallery ORDER BY g_write_date DESC` ;
  db.query(select_Gallery, function (error, result) {
    if (error) {
        throw error;
      }    
    else {
        res.render('index', {g_result : result, dayjs, name:req.session.u_name});
    };
  });
});
 
module.exports = router;