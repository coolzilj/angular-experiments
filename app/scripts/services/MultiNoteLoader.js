'use strict';

angular.module('angularExperimentsApp')
  .factory('MultiNoteLoader', ['Note', '$q', function (Note, $q) {
    return function() {
      var delay = $q.defer();

      Note.query(function(notes) {
        delay.resolve(notes);
      },function() {
        delay.reject('Unable to fetch notes');
      });
      return delay.promise;
    };
  }]);
