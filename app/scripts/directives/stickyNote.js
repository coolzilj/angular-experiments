'use strict';

angular.module('angularExperimentsApp')
  .directive('stickyNote', ['socket', function (socket) {
    var linker = function(scope, element) {
      element.draggable({
        stop: function(event, ui) {
          var x = ui.position.left;
          var y = ui.position.top;

          socket.emit('moveNote', {
            id: scope.note._id.$oid,
            x: x,
            y: y
          });

          scope.note.x = x;
          scope.note.y = y;
          scope.note.update();
        }
      });

      socket.on('onNoteMoved', function(data) {
        // Update if the same note
        if(data.id === scope.note._id.$oid) {
          element.animate({
            left: data.x,
            top: data.y
          });
        }
      });

      // Some DOM initiation to make it nice
      element.css('left', scope.note.x);
      element.css('top', scope.note.y);
      element.hide().fadeIn();
    };

    var controller = function($scope) {
      // Incoming
      socket.on('onNoteUpdated', function(data) {
        // Update if the same note
        if(data._id.$oid === $scope.note._id.$oid) {
          $scope.note.title = data.title;
          $scope.note.body = data.body;
          $scope.note.color = data.color;
        }
      });

      // Outgoing
      $scope.updateNote = function(note) {
        socket.emit('updateNote', note);
        note.update();
      };

      $scope.deleteNote = function(id) {
        $scope.ondelete({
          id: id
        });
      };
    };

    return {
      restrict: 'A',
      link: linker,
      controller: controller,
      scope: {
        note: '=',
        ondelete: '&'
      }
    };
  }]);
