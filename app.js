var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  port: '9928',
  user: 'root',
  password: 'zkfrnrtn12',
  database : 'test',
  multipleStatements: true
})

connection.connect()

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var boardRouter = require('./routes/board');
var albumRouter = require('./routes/album');
var introRouter = require('./routes/intro');
var memberRouter = require('./routes/member');
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
app.use('/album', albumRouter);
app.use('/intro', introRouter);
app.use('/member', memberRouter);



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
