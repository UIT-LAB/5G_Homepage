var express = require('express');
var router = express.Router();
var db = require('../config/db')
var dayjs =  require('dayjs')

router.get('/', function(req, res, next) {
    db.query('select * from Gallery', function (error, result) {
        if (error) {
            throw error;
          }    
        else {
            res.render('gallery', {result : result, dayjs});
            console.log(result);
        };
    });
});



module.exports = router;
