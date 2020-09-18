var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('album');
});

router.post('/androidImage', function(req, res, next){
    console.log("ok");
    res.send('receive Image');
})


module.exports = router;
