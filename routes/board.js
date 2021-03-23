var express = require('express');
var router = express.Router();
var db = require('../config/db')
var dayjs =  require('dayjs')
const jwt = require('jsonwebtoken');
const key = require("./auth/key");
let jwtname, jwtid;


//------------------------------------notice
router.get('/notice/:num', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }
  db.query('select nid, n_title, n_writer, n_writer_date, n_view  from Notice_Board ORDER BY n_writer_date DESC ', function (error, result) {
    if (error) {
      throw error;
    }    
    else {
      res.render('board/notice', {result : result, n_num : req.params.num, max_value:15, dayjs ,id:jwtid,name:jwtname });
    };
  });
});

router.get('/notice/detail/:num', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }
  db.query(`select * from Notice_Board where nid = '${req.params.num}'`, function (error, result) {
    if (error) {
        throw error;
    }   
    else if (result[0] !== undefined) {
      db.query(`update Notice_Board set n_view = n_view+1 where nid = '${req.params.num}'`, function (error, n_view) {
        if(error){
          res.send('<script>alert(`사용 가능한 아이디 입니다.`); location.href=`/login/signUp `</script>')
        }
        else if (result[0] !== undefined) {
          result[0].n_view++;
          res.render('board/notice_detail', {result : result, n_num : req.params.num, max_value:15, dayjs, id:jwtid,name : jwtname});
        }
        else {
          res.render('error');
        } 
      });
    }
    else {
      res.render('error')
    }
  });
});

router.get('/notice_write', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }
  res.render('board/notice_write',{name:jwtname});
});

router.post('/notice/insert_write', function(req, res, next) {
  var date = new dayjs();
  var body = req.body;
  var title = body.noti_title;
  var content = body.noti_content;
  var datetime = date.format('YYYY-MM-DD HH:mm:ss');
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }
  var sql = {n_title:title, n_content : content, n_writer: jwtname, n_writer_date : datetime, n_view : 0};
    db.query('INSERT INTO Notice_Board SET ?', sql , function (error, result) {
      if(error) {
        throw error;
      }    
      else {
        res.redirect("/board/notice/1");
       };
  });
});

router.get('/notice/update/:num', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }
  db.query(`select * from Notice_Board where nid =  '${req.params.num}'`, function (error, result) {
    if(error) {
        throw error;
    }    
    else {
      res.render('board/notice_update', {result:result, n_num : req.params.num, max_value:15, dayjs,name:jwtname});
    };
  });
});

router.post('/notice/update_data', function(req, res, next) {
  var body = req.body;
  var title = body.noti_title;
  var content = body.noti_content;
  var titlex = body.titlex;
  var writerx = body.writerx; 
  var contentx = body.contentx;
  db.query(`Update Notice_Board set n_title = '${title}' , n_content= '${content}' where n_title='${titlex}' and n_content='${contentx}' and n_writer='${writerx}'`, function (error, result) {
      if(error) {
          throw error;
      }    
      else {
        console.log(result);
        res.redirect("/board/notice/1");
      };
  });
});

router.post('/notice/delete', function(req, res, next) {
  var body = req.body;
  var nid = body.nidx;
  
  db.query(`Delete from Notice_Board where nid='${nid}'`, function (error, result) {
      if(error) {
          throw error;
      }    
      else {
          res.redirect("/board/notice/1");
      };
  });
});

//------------------------------- post
router.get('/post/:num', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }

  db.query('select pid, p_title, p_writer, p_writer_date, p_view from Post_Board ORDER BY p_writer_date DESC', function (error, result) {
    if (error) {
          throw error;
        }    
        else {
          res.render('board/post', {result : result, p_num : req.params.num, max_value:15, dayjs,name: jwtname  });
        };
      });
});

router.get('/post/detail/:num', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }
  db.query(`select * from Post_Board where pid = '${req.params.num}'`, function (error, result) {
    if (error) {
        throw error;
    }   
    else if (result[0] !== undefined) {
      db.query(`update Post_Board set p_view = p_view+1 where pid = '${req.params.num}'`, function (error, n_view) {
        if(error){
          throw error;
        }
        else if (result[0] !== undefined) {
          result[0].p_view++;
          res.render('board/post_detail', {result : result, p_num : req.params.num, max_value:15, dayjs, id:jwtid,name : jwtname});
        }
        else {
          res.render('error');
        } 
      });
    }
    else {
      res.render('error')
    }
  });
});

router.get('/post_write', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }
  res.render('board/post_write',{name:jwtname});
});

router.post('/post/insert_write', function(req, res, next) {
  var date = new dayjs();
  var body = req.body;
  var title = body.post_title;
  var content = body.post_content;
  var datetime = date.format('YYYY-MM-DD HH:mm:ss');
  var sql = {p_title:title, p_content : content, p_writer:req.session.u_name, p_writer_date : datetime, p_view : 0};
  
  db.query('INSERT INTO Post_Board SET ?', sql , function (error, result) {
      if(error) {
          throw error;
      }    
      else {
          res.redirect("/board/post/1");
      };
  });
});

router.get('/post/update/:num', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }
  db.query(`select * from Post_Board where pid = '${req.params.num}'`, function (error, result) {
    if(error) {
        throw error;
    }    
    else if (result[0] !== undefined) {
      res.render('board/post_update', {result:result, p_num : req.params.num, max_value:15, dayjs,name:jwtname});
    }
    else {
      res.render('error')
    }
  });
});

router.post('/post/update_data', function(req, res, next) {
  var body = req.body;
  var title = body.post_title;
  var content = body.post_content;
  var titlex = body.titlex;
  var writerx = body.writerx; 
  var contentx = body.contentx;
  db.query(`Update Post_Board set p_title = '${title}' , p_content= '${content}' where p_title='${titlex}' and p_content='${contentx}' and p_writer='${writerx}'`, function (error, result) {
    if(error) {
      throw error;
    }    
    else {
      res.redirect("/board/post/1");
    };
  });
});

router.post('/post/delete', function(req, res, next) {
  var body = req.body;
  var pid = body.pidx;
  
  db.query(`Delete from Post_Board where pid='${pid}'`, function (error, result) {
      if(error) {
          throw error;
      }    
      else {;
          res.redirect("/board/post/1");
      };
  });
});


//------------------------------question
router.get('/question/:num', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }
  db.query('select qid, q_title, q_writer, q_writer_date, admin_comment from Question_Board', function (error, result) {
      if (error) {
        throw error;
      }    
      else {
        res.render('board/question', {result : result, q_num : req.params.num, max_value:15, dayjs,name:jwtname});
      };
    });
});

router.get('/question/detail/:num', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }
  db.query(`select * from Question_Board where qid = '${req.params.num}'`, function (error, result) {
      if (error) {
        throw error;
      }    
      else if (result[0] !== undefined) {
        res.render('board/question_detail', {result : result, q_num : req.params.num, max_value:15, dayjs, name:jwtname, id: jwtid  });
      }
      else {
        res.render('error');
      }
    });
});

router.get('/question_write', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }
  res.render('board/question_write',{name:jwtname});
});

router.post('/question/insert_write', function(req, res, next) {
  var date = new dayjs();
  var body = req.body;
  var title = body.ques_title;
  var content = body.ques_content;
  var datetime = date.format('YYYY-MM-DD HH:mm:ss');
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }
  var sql = {q_title:title, q_content : content, q_writer : jwtname, q_writer_date : datetime};

  db.query('INSERT INTO Question_Board SET ?', sql , function (error, result) {
      if(error) {
          throw error;
      }    
      else {
          res.redirect("/board/question/1");
      };
  });
});

router.get('/question/update/:num', function(req, res, next) {
  if(req.cookies.user != undefined){
    let token = req.cookies.user;
    jwt.verify(token, key, (err, decode)=>{
      if(err){
        throw err;
      }
      else {
        jwtname = decode.user.name
        jwtid = decode.user.id
      }
    })
  }
  db.query(`select * from Question_Board where qid = '${req.params.num}'`, function (error, result) {
    if(error) {
        throw error;
    }    
    else {
      res.render('board/question_update', {result:result, q_num : req.params.num, max_value:15, dayjs,name:jwtname});
    };
  });
});

router.post('/question/update_data', function(req, res, next) {
  var body = req.body;
  var title = body.ques_title;
  var content = body.ques_content;
  var titlex = body.titlex;
  var contentx = body.contentx;
  var datas = [title, content,titlex, contentx];

  db.query(`Update Question_Board set q_title = '${title}' , q_content= '${content}' where q_title='${titlex}' and q_content='${contentx}'`, datas , function (error, result) {
      if(error) {
          throw error;
      }    
      else {
        res.redirect("/board/question/1");
      };
  });
});

router.post('/question/admin_comment', function(req, res, next) {
  var body = req.body;
  var titlex = body.titlex;
  var contentx = body.contentx;
  var adminx = body.ques_comment;
  var admindatex = dayjs().format('YY.MM.DD');
  
  db.query(`Update Question_Board set admin_comment = '${adminx}' , admin_date = '${admindatex}' where q_title='${titlex}' and q_content='${contentx}'`, function (error, result) {
      if(error) {
          throw error;
      }    
      else {
        res.redirect("/board/question/1");
      };
  });
});

router.post('/question/delete', function(req, res, next) {
  var body = req.body;
  var qid = body.qidx;
  
  db.query(`Delete from Question_Board where qid='${qid}'` , function (error, result) {
      if(error) {
          throw error;
      }    
      else {
          res.redirect("/board/question/1");
      };
  });
});

module.exports = router;
