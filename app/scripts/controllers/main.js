'use strict';

angular.module('justfortheangularbookApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.expanders = [
      {'title': 'Title1',
       'text' : 'Text text text text1232324353564565465467'},
      {'title': 'Title2',
       'text' : 'Text text text text1232324353564565465467'},
      {'title': 'Title3',
       'text' : 'Text text text text1232324353564565465467'},
      {'title': 'Title4',
       'text' : 'Text text text text1232324353564565465467'},
      {'title': 'Title5',
       'text' : 'Text text text text1232324353564565465467'},
      {'title': 'Title6',
       'text' : 'Text text text sdflsdjflsdjflsdjfsdjflsjsdf'},
    ];
  });
