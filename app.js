var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var options = {
  host: 'conative.myds.me',
  port: '32773',
  user : 'root',
  password: 'dudwoalswo12',
  database: '5g_db'
};

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var boardRouter = require('./routes/board');
var introRouter = require('./routes/intro');
var galleryRouter = require('./routes/gallery');
var signUpRouter = require('./routes/signUp');
var memberRouter = require('./routes/member');
var findIdRouter = require('./routes/findId');
var findPwRouter = require('./routes/findPw');
var noticeRouter = require('./routes/notice');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/board', boardRouter);
app.use('/gallery', galleryRouter);
app.use('/intro', introRouter);
app.use('/signUp', signUpRouter);
app.use('/member', memberRouter);
app.use('/findId', findIdRouter);
app.use('/findPw', findPwRouter);
app.use('/notice', noticeRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/db',function(req,res,next){
  connection.query(`SELECT * FROM user`), function (error, result, fields) {
      if(err){
        throw err;
      }
      else {
        console.log(result);
        res.render({result : result});
      }
  }

})
app.listen(3000);
module.exports = app;
