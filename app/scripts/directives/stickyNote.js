'use strict';

angular.module('justfortheangularbookApp')
  .directive('stickyNote', ['socket', function (socket) {
    var linker = function(scope, element, attrs) {
      element.draggable({
        stop: function(event, ui) {
          socket.emit('moveNote', {
            id: scope.note.id,
            x: ui.position.left,
            y: ui.position.top
          });
        }
      });

      socket.on('onNoteMoved', function(data) {
        // Update if the same note
        if(data.id === scope.note.id) {
          element.animate({
            left: data.x,
            top: data.y
          });
        }
      });

      // Some DOM initiation to make it nice
      element.css('left', '10px');
      element.css('top', '50px');
      element.hide().fadeIn();
    };

    var controller = function($scope) {
      // Incoming
      socket.on('onNoteUpdated', function(data) {
        // Update if the same note
        if(data.id === $scope.note.id) {
          $scope.note.title = data.title;
          $scope.note.body = data.body;
        }
      });

      // Outgoing
      $scope.updateNote = function(note) {
        socket.emit('updateNote', note);
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
