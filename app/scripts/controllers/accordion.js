'use strict';

angular.module('angularExperimentsApp')
  .controller('AccordionCtrl', ['$scope', 'Note', function ($scope, Note) {
    $scope.expanders = Note.query();
  }]);
