var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signalRouter = require('./routes/signal');
var recordRouter = require('./routes/record');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/socket.io/'));
app.use(express.static(__dirname + '/node_modules/socket.io-client/'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'public/images/favicon.ico')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signal', signalRouter);
app.use('/record', recordRouter);

// ioServer.http().io();
// ioServer.io.route('ready', function (req) {
//   req.io.join(req.data);
//   ioServer.io.room(req.data).broadcast('announce', {
//     message: 'New client in the ' + req.data + ' room.'
//   });
// });
// ioServer.io.on('connection', function(socket){
//     console.log('a user connected');
// });

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
