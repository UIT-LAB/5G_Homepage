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
        res.render('index', {result : result, dayjs});
        console.log(result);
    };
  });
});
 
module.exports = router;