'use strict';

angular.module('justfortheangularbookApp', ['btford.socket-io'])
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
