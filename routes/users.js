// var express = require('express');
// var router = express.Router();
//
// var http = require('http').Server(express);
// //var io = require('socket.io');
// var io = require('socket.io')(http, {
//   path: '/socket.io-client'
// });
//
// //var iso = io(http);
// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });
//
// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('users', { title: 'Users' });
// });
//
//
//
// module.exports = router;
//var port = 3000;
var express = require('express');
var router = express.Router();

//var socket = require('socket.io');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users' });
});
//
// // App setup
// var app = express();
// var server = app.listen(3000, function(){
//   console.log('listening for requests on port 4000,');
// });
//
// var http = require('http').Server(app);
//
// // Socket setup & pass server
// var io = socket(http);
// io.on('connection', (socket) => {
//
//   console.log('made socket connection', socket.id);
//
//   // Handle chat event
//   socket.on('chat', function(data){
//     // console.log(data);
//     io.sockets.emit('chat', data);
//   });
//
//   // Handle typing event
//   socket.on('typing', function(data){
//     socket.broadcast.emit('typing', data);
//   });
//
// });



module.exports = router;

