'use strict';

angular.module('angularExperimentsApp')
  .controller('AccordionCtrl', ['$scope', 'notes', function ($scope, notes) {
    $scope.expanders = notes;
  }]);
