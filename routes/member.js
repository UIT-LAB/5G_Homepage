var express = require('express');
var router = express.Router();
var db = require('../config/db')
var dayjs =  require('dayjs')

router.get('/', function(req, res, next){
    db.query('select * from Member', function (error, result) {
       let date = new dayjs();
        if (error) {
           throw error;
         }    
        else {
           res.render('member', {result : result});
           console.log(result);
        };
   });
})
module.exports = router;