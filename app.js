var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var contact = require('./routes/contact');
var sendfile = require('./routes/sendfile');
var pricing = require('./routes/pricing')
var sharonandlawrence = require('./routes/sharonandlawrence');
var antoniaandrichard = require('./routes/antoniaandrichard');
var hughandenora = require('./routes/hughandenora');
var lauraandjohnny = require('./routes/lauraandjohnny');
var wayneandolga = require('./routes/wayneandolga');
var riazandkimi = require('./routes/riazandkimi');
var mattandkate = require('./routes/mattandkate');
var jimandrabiah = require('./routes/jimandrabiah');
var jessandmartin = require('./routes/jessandmartin');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/contact', contact);
app.use('/sendfile', sendfile);
app.use('/pricing', pricing);
app.use('/sharonandlawrence', sharonandlawrence);
app.use('/antoniaandrichard', antoniaandrichard);
app.use('/hughandenora', hughandenora);
app.use('/lauraandjohnny', lauraandjohnny);
app.use('/wayneandolga', wayneandolga);
app.use('/riazandkimi', riazandkimi);
app.use('/mattandkate', mattandkate);
app.use('/jimandrabiah', jimandrabiah);
app.use('/jessandmartin', jessandmartin);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { errorMessage: err });
});

module.exports = app;
