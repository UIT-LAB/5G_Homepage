var express = require('express');
var router = express.Router();
var db = require('../config/db')
var dayjs =  require('dayjs')

router.get('/', function(req, res, next) {
    res.render('login');
});

router.get('/db', function(req, res, next){
    db.query('select * from Login ', function (error, result) {
        let date = dayjs(result[0].s_date)
        if (error) {
            throw error;
          }    
        else {
            console.log(date);
            res.send(date.format('YYYY-MM-DD'));
            
        };
    });
})


module.exports = router;