var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongodb = require('mongodb')

var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var StudentRouter = require('./routes/Student');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
var Student = require("./models/Student");

var mongoose = require('mongoose')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Student', StudentRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

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


// We can seed the collection if needed on server start 
async function recreateDB() {
  // Delete everything 
  await Student.deleteMany();

  let instance1 = new
    Student({
      Name: "Shashi", Age: 22,
      Address: "Suryapet"
    });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  let instance2 = new
    Student({
      Name: "ram", Age: 25,
      Address: "Hyderabad"
    });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  let instance3 = new
  Student({
    Name: "Sunil", Age: 32,
    Address: "khammam"
  });
instance3.save(function (err, doc) {
  if (err) return console.error(err);
  console.log("First object saved")
});

}

let reseed = true;
if(reseed){recreateDB();}

module.exports = app;
