'use strict';

angular.module('angularExperimentsApp')
  .controller('NavbarCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.links = [
      {text: 'Accordion', href: '#/accordion'},
      {text: 'Datepicker', href: '#/datepicker'},
      {text: 'Collaboard', href: '#/board'}
    ];

    $rootScope.$on('$routeChangeStart', function() {
      $scope.isLoading = true;
    });

    $rootScope.$on('$routeChangeSuccess', function() {
      $scope.isLoading = false;
    });
  }]);
