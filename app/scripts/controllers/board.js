'use strict';

angular.module('justfortheangularbookApp')
  .controller('BoardCtrl', ['$scope', 'socket', function ($scope, socket) {
    $scope.notes = [];

    // Incoming
    socket.on('onNoteCreated', function(data) {
      $scope.notes.push(data);
    });

    socket.on('onNoteDeleted', function(data) {
      $scope.handleDeletedNoted(data.id);
    });

    // Outgoing
    $scope.createNote = function() {
      var note = {
        id: new Date().getTime(),
        title: '爸爸',
        body: '冰箱有吃的，记得先用微波炉热一下',
        color: 'yellow'
      };

      $scope.notes.push(note);
      socket.emit('createNote', note);
    };

    $scope.deleteNote = function(id) {
      $scope.handleDeletedNoted(id);

      socket.emit('deleteNote', {id: id});
    };

    $scope.handleDeletedNoted = function(id) {
      var oldNotes = $scope.notes,
      newNotes = [];

      angular.forEach(oldNotes, function(note) {
        if(note.id !== id) {
          newNotes.push(note);
        }
      });

      $scope.notes = newNotes;
    };
  }]);
