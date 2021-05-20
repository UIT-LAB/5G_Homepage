var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var winston = require('./config/winston')
var fs = require('fs');
require('dotenv').config();

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var boardRouter = require('./routes/board');
var introRouter = require('./routes/intro');
var galleryRouter = require('./routes/gallery');
var memberRouter = require('./routes/member');
var researchRouter = require('./routes/research');
var androidRouter = require('./routes/android');
var helmet = require('helmet')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev', {stream: winston.stream}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/board', boardRouter);
app.use('/gallery', galleryRouter);
app.use('/intro', introRouter);
app.use('/member', memberRouter);
app.use('/research', researchRouter);
app.use('/android', androidRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(req, res, next) {
  res.status(404).render('error');
});

/// multer
app.use(function(req,res,next){
  var dir = './public/images';
    if(!fs.existsSync(dir)) fs.mkdirSync(dir);
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

app.listen(3000, () => winston.info(`server start`));
module.exports = app;
