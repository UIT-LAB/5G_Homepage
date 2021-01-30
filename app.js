var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var session = require('express-session');
require('dotenv').config();

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var boardRouter = require('./routes/board');
var introRouter = require('./routes/intro');
var galleryRouter = require('./routes/gallery');
var memberRouter = require('./routes/member');
var researchRouter = require('./routes/research');
var helmet = require('helmet')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var MySQLStore = require('express-mysql-session')(session);   

//로그인 세션
app.use(session({
  name: 'sessionID',
  secret: 'asdhgasdsdgaasdg',
  resave: false,
  saveUninitialized: true,
  store: new MySQLStore({
    host : process.env.DB_host,
    port : process.env.DB_port,
    user : process.env.DB_user,
    password : process.env.DB_password,
    database : process.env.DB_database
  }),
  cookie: {
    maxAge: 24000 * 60 * 60 // 쿠키 유효기간 24시간
  }
}));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/board', boardRouter);
app.use('/gallery', galleryRouter);
app.use('/intro', introRouter);
app.use('/member', memberRouter);
app.use('/research', researchRouter);

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


app.use(helmet());

app.listen(3000);
module.exports = app;
