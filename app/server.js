var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  socket.on('createNote', function(data) {
    socket.broadcast.emit('onNoteCreated', data);
  });

  socket.on('updateNote', function(data) {
    socket.broadcast.emit('onNoteUpdated', data);
  });

  socket.on('moveNote', function(data){
    socket.broadcast.emit('onNoteMoved', data);
  });

  socket.on('deleteNote', function(data){
    socket.broadcast.emit('onNoteDeleted', data);
  });
});

exports = module.exports = server;

exports.use = function() {
  app.use.apply(app, arguments);
};
