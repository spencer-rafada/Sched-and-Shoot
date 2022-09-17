var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var searchRouter = require('./routes/search');
var testAPIRouter = require('./routes/testAPI');

var app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://<USERNAME>:<PASSWORD>@oh-snap.99pknxd.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter);
app.use('/testAPI', testAPIRouter);

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
