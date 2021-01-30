var express = require('express');
var router = express.Router();
var db = require('../config/db')
var dayjs =  require('dayjs')

router.get('/question/:num', function(req, res, next) {
    db.query('select * from Question_Board', function (error, result) {
        if (error) {
          throw error;
        }    
        else {
          res.render('board/question', {result : result, q_num : req.params.num, max_value:15, dayjs,name:req.session.u_name  });
        };
      });
});

router.get('/question/detail/:num', function(req, res, next) {
    db.query('select * from Question_Board', function (error, result) {
        if (error) {
          throw error;
        }    
        else {
          res.render('board/question_detail', {result : result, q_num : req.params.num, max_value:15, dayjs,name:req.session.u_name  });
        };
      });
});


router.get('/post/:num', function(req, res, next) {
    db.query('select * from Post_Board', function (error, result) {
        if (error) {
          throw error;
        }    
        else {
          res.render('board/post', {result : result, p_num : req.params.num, max_value:15, dayjs,name:req.session.u_name  });
        };
      });
});

router.get('/post/detail/:num', function(req, res, next) {
    db.query('select * from Post_Board', function (error, result) {
      if (error) {
        throw error;
      }    
      else {
        res.render('board/post_detail', {result : result, p_num : req.params.num, max_value:15, dayjs ,name:req.session.u_name });
      };
    });
});

router.get('/notice/:num', function(req, res, next) {
    db.query('select * from Notice_Board', function (error, result) {
      if (error) {
        throw error;
      }    
      else {
        res.render('board/notice', {result : result, n_num : req.params.num, max_value:15, dayjs ,name:req.session.u_name });
      };
    });
});

router.get('/notice/detail/:num', function(req, res, next) {
  db.query('select * from Notice_Board', function (error, result) {
    if (error) {
      throw error;
    }    
    else {
      db.query(`update Notice_Board set n_view = n_view+1 where nid = ?`,req.params.num , function (error, n_view) {
        if(error){
          throw error;
        }
        result[0].n_view++;
        res.render('board/notice_detail', {result : result, n_num : req.params.num, max_value:15, dayjs, name : req.session.u_name});
        });
      }
    });
  });

router.get('/notice_write', function(req, res, next) {
    res.render('board/notice_write');
});
router.get('/post_write', function(req, res, next) {
  res.render('board/post_write');
});
router.get('/question_write', function(req, res, next) {
  res.render('board/question_write');
});





router.post('/notice/insert_write', function(req, res, next) {
  var date = new dayjs();
  var body = req.body;
  var title = body.noti_title;
  var content = body.noti_content;
  var writer = body.noti_write;
  var datetime = date.format('YYYY-MM-DD HH:mm:ss');
  var sql = {n_title:title, n_content : content, n_writer:writer, n_writer_date : datetime, n_view : 0};
  
  db.query('INSERT INTO Notice_Board SET ?', sql , function (error, result) {
      if(error) {
          throw error;
      }    
      else {;
          res.redirect("/board/notice/1");
      };
  });
});

router.post('/post/insert_write', function(req, res, next) {
  var date = new dayjs();
  var body = req.body;
  var title = body.post_title;
  var content = body.post_content;
  var writer = body.post_write;
  var datetime = date.format('YYYY-MM-DD HH:mm:ss');
  var sql = {p_title:title, p_content : content, p_writer:writer, p_writer_date : datetime};
  
  db.query('INSERT INTO POST_Board SET ?', sql , function (error, result) {
      if(error) {
          throw error;
      }    
      else {
          res.redirect("/board/post/1");
      };
  });
});

router.post('/question/insert_write', function(req, res, next) {
  var date = new dayjs();
  var body = req.body;
  var title = body.ques_title;
  var content = body.ques_content;
  var user_id = body.ques_write;
  var datetime = date.format('YYYY-MM-DD HH:mm:ss');
  var sql = {title:title, content : content, user_id : user_id, write_date : datetime};
  
  db.query('INSERT INTO Question_Board SET ?', sql , function (error, result) {
      if(error) {
          throw error;
      }    
      else {
          res.redirect("/board/question/1");
      };
  });
});

router.get('/notice/update/:num', function(req, res, next) {
  db.query('select * from Notice_Board', function (error, result) {
    if(error) {
        throw error;
    }    
    else {
      res.render('board/notice_update', {result:result, n_num : req.params.num, max_value:15, dayjs});
    };
  });
});

router.get('/post/update/:num', function(req, res, next) {
  db.query('select * from POST_Board', function (error, result) {
    if(error) {
        throw error;
    }    
    else {
      res.render('board/post_update', {result:result, p_num : req.params.num, max_value:15, dayjs});
    };
  });
});

router.get('/question/update/:num', function(req, res, next) {
  db.query('select * from Question_Board', function (error, result) {
    if(error) {
        throw error;
    }    
    else {
      res.render('board/question_update', {result:result, q_num : req.params.num, max_value:15, dayjs});
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
  var datas = [title, content,titlex, contentx, writerx];
  
  db.query('Update Notice_Board set n_title = ? , n_content= ? where n_title=? and n_content=? and n_writer=?', datas , function (error, result) {
      if(error) {
          throw error;
      }    
      else {
        console.log(result);
          res.redirect("/board/notice/1");
      };
  });
});

router.post('/post/update_data', function(req, res, next) {
  var body = req.body;
  var title = body.post_title;
  var content = body.post_content;
  var titlex = body.titlex;
  var writerx = body.writerx; 
  var contentx = body.contentx;
  var datas = [title, content,titlex, contentx, writerx];
  
  db.query('Update Post_Board set p_title = ? , p_content= ? where p_title=? and p_content=? and p_writer=?', datas , function (error, result) {
      if(error) {
          throw error;
      }    
      else {
        console.log(result);
          res.redirect("/board/post/1");
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
  
  db.query('Update Question_Board set title = ? , content= ? where title=? and content=?', datas , function (error, result) {
      if(error) {
          throw error;
      }    
      else {
        console.log(result);
          res.redirect("/board/question/1");
      };
  });
});

router.post('/notice/delete', function(req, res, next) {
    var body = req.body;
    var title = body.titlex;
    var writer = body.writerx; 
    var content = body.contentx;
    var datas = [title, writer, content];
    
    db.query('Delete from Notice_Board where n_title=? and n_writer=? and n_content=?', datas , function (error, result) {
        if(error) {
            throw error;
        }    
        else {;
            res.redirect("/board/notice/1");
        };
    });
});


module.exports = router;
