const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const isAdmin = require("./module/isAdmin");


const indexRouter = require('./routes/public/index');
const loginRouter = require('./routes/private/login');
const bathroomRouter = require("./routes/private/bathroom");
const showerRouter = require("./routes/private/shower");
const sinksRouter = require("./routes/private/sinks");
const mixerRouter = require("./routes/private/mixer");
const towelRouter = require("./routes/private/towel");
const toiletRouter = require("./routes/private/toilet");

// const { error } = require('console');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(session({
  name: "session-cookie",
  secret: 'rfrjqnjjxtymdf;ysgfhjkm',
  maxAge: null,
  saveUninitialized: true,
  resave: true,
}));


app.use('/', indexRouter);
app.use('/adminPanel/login', loginRouter);
app.use('/adminPanel/bathroom', isAdmin, bathroomRouter);
app.use('/adminPanel/shower', isAdmin, showerRouter);
app.use('/adminPanel/sinks', isAdmin, sinksRouter);
app.use('/adminPanel/mixer', isAdmin, mixerRouter);
app.use('/adminPanel/towel', isAdmin, towelRouter);
app.use('/adminPanel/toilet', isAdmin, toiletRouter);

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
  res.json(err);
});

module.exports = app;
