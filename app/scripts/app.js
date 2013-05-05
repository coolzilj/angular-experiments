'use strict';

angular.module('angularExperimentsApp', ['btford.socket-io', 'ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/datepicker', {
        templateUrl: 'views/datepicker.html',
        controller: 'DatepickerCtrl'
      })
      .when('/board', {
        templateUrl: 'views/board.html',
        controller: 'BoardCtrl'
      })
      .when('/accordion', {
        templateUrl: 'views/accordion.html',
        controller: 'AccordionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
