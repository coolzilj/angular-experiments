'use strict';

angular.module('angularExperimentsApp')
  .controller('BoardCtrl', ['$scope', 'socket', 'Note', function ($scope, socket, Note) {
    $scope.notes = Note.query();

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
        title: '',
        body: '',
        color: 'yellow',
        x: 490,
        y: 100
      };

      Note.save(note, function(data) {
        note = new Note(data);
        $scope.notes.push(note);
        socket.emit('createNote', note);
      });
    };

    $scope.deleteNote = function(id) {
      $scope.handleDeletedNoted(id);

      socket.emit('deleteNote', {id: id});
    };

    $scope.handleDeletedNoted = function(id) {
      var oldNotes = $scope.notes,
      newNotes = [];

      angular.forEach(oldNotes, function(note) {
        if(note._id.$oid !== id) {
          newNotes.push(note);
        } else {
          note = new Note(note);
          note.destroy();
        }
      });

      $scope.notes = newNotes;
    };
  }]);
