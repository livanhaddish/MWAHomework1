var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const crypto = require('crypto');
var mongoClient = require('mongodb').MongoClient;
var router = express.Router();
// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/secrete', router.get('/', function(req, res, next) {

    mongoClient.connect('mongodb://127.0.0.1:27017/Lab7', function(err, client){
      if(err) throw err;
      const db = client.db('Lab7');
      db.collection('Homework7').findOne({}, function(err ,doc){
          if(err) throw err;
          client.close();
//////////////////////////////////////////////////////////////////////////////////////////////////
const decipher = crypto.createDecipher('aes256', 'asaadsaad');
let decrypted = '';
decipher.on('readable', () => {
  const data = decipher.read();
  if (data)
    decrypted += data.toString('utf8');
});
decipher.on('end', () => {
 
  res.send(decrypted);
  // Prints: some clear text data
});
const encrypted = doc.message;
decipher.write(encrypted, 'hex');
decipher.end();
      });
    });
 
}));

app.use('/users', usersRouter);

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
app.listen(3000, ()=>console.log("listening to port 3000"));
module.exports = app;
