var express = require('express');
const db = require('../config/db');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test', { title: 'test' });
});

router.get('/users', (req, res, next)=>{
    res.send('{"uid":1, "name":"hello", "age":25, "phone":"010-4304-2134"}');
});

router.get('/manyUsers', (req, res, next)=>{
    res.send('[{"uid":1, "name":"hello", "age":25, "phone":"010-4304-2134"},{"uid":2, "name":"world", "age":24, "phone":"010-2679-4766"}]');
})

router.get('/multiQustion', (req, res)=>{
  db.query('select * from Question_Board', function(err, fields){
    if(err){
      throw err;
    }else{
      res.send(fields);
      console.log(fields);
    }
  })
});

router.get('/License', (req, res)=>{
  db.query('select * from license', function(err, fields){
    if(err){
      throw err;
    }else{
      res.send(fields);
      console.log(fields);
    }
  })
});

router.get('/Software', (req, res)=>{
  db.query('select * from software', function(err, fields){
    if(err){
      throw err;
    }else{
      res.send(fields);
      console.log(fields);
    }
  })
});

router.get('/Technology', (req, res)=>{
  db.query('select * from technology', function(err, fields){
    if(err){
      throw err;
    }else{
      res.send(fields);
      console.log(fields);
    }
  })
});

router.get('/Standard', (req, res)=>{
  db.query('select * from standard', function(err, fields){
    if(err){
      throw err;
    }else{
      res.send(fields);
      console.log(fields);
    }
  })
});

router.get('/Notice', (req, res)=>{
  db.query('select * from Notice_Board', function(err, fields){
    if(err){
      throw err;
    }else{
      res.send(fields);
      console.log(fields);
    }
  })
});

router.get('/Treatise', (req, res)=>{
  db.query('select * from thesis', function(err, fields){
    if(err){
      throw err;
    }else{

      res.send(fields);
      console.log(fields);
    }
  })
});

router.get('/Question', (req, res)=>{
  db.query('select * from Question_Board', function(err, fields){
    if(err){
      throw err;
    }else{
      res.send(fields);
      console.log(fields);
    }
  })
});



router.get('/Post', (req, res)=>{
  db.query('select * from Post_Board', function(err, fields){
    if(err){
      throw err;
    }else{
      res.send(fields);
      console.log(fields);
    }
  })
});


router.post('/register', (req, res)=>{ 
  var data = {
    u_id :req.body.u_id,
    u_pw: req.body.u_pw,
    u_name : req.body.u_name,
    u_email : req.body.u_email,
    u_phone : req.body.u_phone,
 }

  db.query('INSERT INTO UserInfo set ?', data, function(err, fields){
    if(err){
      throw err;
    }else{
      res.send('{"result":"ok"}');
    }
  })
});

router.post('/checkid', (req, res)=>{ 
  var data = {
    u_id :req.body.u_id,
 }

  db.query('select u_id from UserInfo WHERE ?', data, function(err, fields){
    if(err){
      throw err;
    }else if(fields==""){
      console.log("아이디 사용 가능");
      res.send('{"checkid":"success"}');
    }else{
      console.log("아이디 사용 불가능");
      res.send('{"checkid":"fail"}');
    }
  })
});

router.post('/notice', (req, res)=>{ 
  var data = {
    n_title :req.body.n_title,
    n_content: req.body.n_content
 }

  db.query('INSERT INTO Notice_Board set ?', data, function(err, fields){
    if(err){
      throw err;
    }else{
      res.send('{"result":"ok"}');
    }
  })
});

router.post('/post', (req, res)=>{ 
  var data = {
    p_title :req.body.p_title,
    p_content: req.body.p_content
 }

  db.query('INSERT INTO Post_Board set ?', data, function(err, fields){
    if(err){
      throw err;
    }else{
      res.send('{"result":"ok"}');
    }
  })
});

router.post('/question', (req, res)=>{ 
  var data = {
    title :req.body.title,
    content: req.body.content
 }

  db.query('INSERT INTO Question_Board set ?', data, function(err, fields){
    if(err){
      throw err;
    }else{
      res.send('{"result":"ok"}');
    }
  })
});

router.post('/', (req, res) => {
    var body = req.body;
    var id = body.inputid;
    var pw = body.inputpw;
    var output = crypto.createHash('sha512').update(pw).digest('base64')
   
    var jwtname;
    let token_value;
            
    db.query(`select * from UserInfo where u_id='${id}' and u_pw= '${output}'`, async function (err, result) {
        if (err) throw err;
        if (result[0] !== undefined) {
            const user = {
                id: result[0].u_id,
                name: result[0].u_name,
            }
            await jwt.sign({user:user},key,{expiresIn:'1h'},(error, token) => {
                if(error) {
                    throw error;
                }
                res.cookie("user",token);
                token_value = token;
            });
            
            await jwt.verify(token_value, key, (err, decode)=>{
              if(err){
                throw err;
              }
              else {
                jwtname = decode.user.name
              }
            })

            await db.query(`Update UserInfo set token = '${token_value}' where u_id = '${result[0].u_id}'`, function(error, result){
                if (error) {
                 throw error;
                }
                else {
                    res.send(token_value);
            }                  
        });
    }
    else{
            res.send('<script>alert(`정보가 일치하지 않습니다.`); location.href=`/login`</script>')
        }
    });
});


module.exports = router;
