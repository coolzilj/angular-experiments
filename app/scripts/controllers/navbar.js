'use strict';

angular.module('angularExperimentsApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.links = [
      {text: 'Accordion', href: '#/accordion'},
      {text: 'Datepicker', href: '#/datepicker'},
      {text: 'Collaboard', href: '#/board'}
    ];
  });
