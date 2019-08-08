var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var bodyparser = require("body-parser");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var incidentsRouter = require('./routes/incidents');

mongoose.connect("mongodb://127.0.0.1:27017/safeTap", {
  useNewUrlParser: true
});
let db = mongoose.connection;

// Check connection
db.once('open', function() {
  console.log('---Connected to MongoDB----');
});

var app = express();

var handlebars = require('express-handlebars').create({
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
  defaultLayout: 'layout',
  extname: 'hbs'
});

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "views"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/incidents', incidentsRouter);
// app.use('/users', usersRouter);


app.get('*', function(req, res, next) {
  res.locals.user = req.user || null;
  next();
});

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

module.exports = app;
