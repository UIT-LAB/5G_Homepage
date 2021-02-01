var express = require('express');
var router = express.Router();
var db = require('../config/db');
var dayjs =  require('dayjs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var select_Gallery = `select * from Gallery ORDER BY g_write_date DESC LIMIT 3`;
  var select_Research = `select * from Research_Fields ORDER BY date_start DESC LIMIT 3`;

  db.query(select_Gallery, function (error, result) {
    if (error) {
        throw error;
    }    
    else {
      g_result = result;
      console.log(result);
      db.query(select_Research, function(error, result) {
        if(error) {
          throw error;
        }
        else {
         r_result = result;
         console.log(result);
         res.render('index', {result : g_result, results : r_result, dayjs, name:req.session.u_name});
        }
      })
      console.log(result);
    };
  });
});
 
module.exports = router;