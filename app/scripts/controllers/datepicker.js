'use strict';

angular.module('justfortheangularbookApp')
  .controller('DatepickerCtrl', function ($scope) {
    $scope.currentDate = '';
    $scope.text = '还没有选择任何日子';
    $scope.updateText = function(date) {
      $scope.text = '你选择了-';
    };
  });
