var express = require('express');
// var http = require('http').Server(app);
var ioServer = require('socket.io');

var router = express.Router();
// var app = expressio();
// app.http().io();
// var io = require('socket.io')(express);
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('profesor', { title: 'Profesor' });
});


module.exports = router;

// io.on('connection', function(socket){
//     console.log('a user connected');
// });

// http.listen(3000, function(){
//     console.log('listening on *:3000');
// });
//
// ioServer(express).on('connection', function(socket) {
//     RTCMultiConnectionServer.addSocket(socket, config);
//
//     // ----------------------
//     // below code is optional
//
//     const params = socket.handshake.query;
//
//     if (!params.socketCustomEvent) {
//         params.socketCustomEvent = 'custom-message';
//     }
//
//     socket.on(params.socketCustomEvent, function(message) {
//         socket.broadcast.emit(params.socketCustomEvent, message);
//     });
// });