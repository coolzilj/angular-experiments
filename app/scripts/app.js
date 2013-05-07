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
        resolve: {
          notes: function (MultiNoteLoader) {
            return MultiNoteLoader();
          }
        },
        templateUrl: 'views/board.html',
        controller: 'BoardCtrl'
      })
      .when('/accordion', {
        resolve: {
          notes: function (MultiNoteLoader) {
            return MultiNoteLoader();
          }
        },
        templateUrl: 'views/accordion.html',
        controller: 'AccordionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
