var express = require('express');
var router = express.Router();
var db = require('../config/db');
var dayjs = require('dayjs');

/* GET users listing. */
router.get('/', function (req, res, next) {
  var select_Gallery = `select * from Gallery ORDER BY g_write_date DESC LIMIT 3`;
  var select_Research = `select * from Research_Fields ORDER BY date_start DESC LIMIT 3`;
  var select_Notice = `select * from Notice_Board ORDER BY nid DESC LIMIT 3`;
  var select_Post = `select * from Post_Board ORDER BY pid DESC LIMIT 3`;

  db.query(select_Gallery, function (error, result) {
    if (error) {
      throw error;
    }
    else {
      g_result = result;
      console.log(result);
      db.query(select_Research, function (error, result) {
        if (error) {
          throw error;
        }
        else {
          r_result = result;
          console.log(result);
          db.query(select_Notice, function (error, result) {
            if (error) {
              throw error;
            }
            else {
              n_result = result;
              console.log(result);
              db.query(select_Post, function (error, result) {
                if (error) {
                  throw error;
                }
                else {
                  p_result = result;
                  console.log(result);
                  res.render('index', { 'g_result': g_result, 'r_result': r_result, 'n_result': n_result, dayjs, 'name': req.session.u_name });
                }
              });
            }
          });
        }
      });
    }
  });
});

module.exports = router;