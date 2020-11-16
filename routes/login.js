var express = require('express');
var router = express.Router();
var db = require('../config/db')
var dayjs =  require('dayjs')

router.get('/', function(req, res, next) {
    res.render('login');
});

router.get('/db', function(req, res, next){
    db.query('select * from Login ', function (error, result) {
        let date = new dayjs();
        if (error) {
            throw error;
          }    
        else {
            console.log(result);
            res.send(result);
            
        };
    });
})


module.exports = router;