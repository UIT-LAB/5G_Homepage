// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const winston = require('./config/winston')
const fs = require('fs');
const methodOverride = require('method-override');
require('dotenv').config();
const { auth } = require('./middleware/auth');
const {test} = require('./middleware/test');
const cors = require('cors');

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const boardRouter = require('./routes/board');
const introRouter = require('./routes/intro');
const galleryRouter = require('./routes/gallery');
const memberRouter = require('./routes/member');
const researchRouter = require('./routes/research');
const androidRouter = require('./routes/android');
const helmet = require('helmet')
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

app.use(auth);
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/board', boardRouter);
app.use('/gallery', galleryRouter);
app.use('/intro', introRouter);
app.use('/member', memberRouter);
app.use('/research', researchRouter);
app.use('/android', androidRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// app.use(function (req, res, next) {
//   res.status(404).render('error');
// });

/// multer
app.use(function (req, res, next) {
  let dir = './public/images';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(helmet());


app.listen(3001, () => winston.info(`server start`));
module.exports = app;
