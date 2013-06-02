'use strict';

angular.module('angularExperimentsApp')
  .controller('DatepickerCtrl', function ($scope) {
    $scope.currentDate = '';
    $scope.text = 'Nothing selected yet!';
    $scope.updateText = function() {
      $scope.text = 'You chose-';
    };
  });
