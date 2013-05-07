'use strict';

angular.module('angularExperimentsApp')
  .directive('expander', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      require: '^?accordion',
      scope: {
        title: '=expanderTitle',
        color: '=expanderColor'
      },
      template: '<div class="{{color}}">' +
                  '<div class="title" ng-click="toggle()">{{title}}</div>' +
                  '<div class="body" ng-show="showMe" ng-transclude></div>' +
                '</div>',
      link: function postLink(scope, element, attrs, accordionController) {
        scope.showMe = false;
        accordionController.addExpander(scope);

        scope.toggle = function() {
          scope.showMe = !scope.showMe;
          accordionController.gotOpened(scope);
        };
      }
    };
  });
