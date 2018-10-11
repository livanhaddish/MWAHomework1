var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var locationRouter = require('./routes/location');
const db = require('./modules/mongoDbConnection');

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
app.use('/location', locationRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
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

const dbName = `mwa`;
const dbUrl = `mongodb://127.0.0.1:27017/${dbName}`;

db.connect(dbUrl, dbName, (err) => {
  if (err) {
    console.log('Unable to connect to MongoDB...')
    return;
  }

  console.log('Connected to MongoDB...')
  app.listen(3000, () => {
    console.log('Listening on port 3000...')
  })
})

module.exports = app;