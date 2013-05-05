'use strict';

angular.module('angularExperimentsApp')
  .directive('datepicker', function () {
    return {
      restrict: 'A',
      require: '?ngModel',
      scope: {select: '&'},
      link: function postLink(scope, element, attrs, ngModel) {
        if (!ngModel) {return;}

        var opts = {};

        opts.dateFormat = 'mm/dd/yy';

        var updateModel = function(dateText) {
          scope.$apply(function() {
            ngModel.$setViewValue(dateText);
          });
        };

        opts.onSelect = function(dateText) {
          updateModel(dateText);
          if(scope.select) {
            scope.$apply(function() {
              scope.select({date: dateText});
            });
          }
        };

        ngModel.$render = function() {
          element.datepicker('setDate', ngModel.$viewValue || '');
        };

        element.datepicker(opts);
      }
    };
  });
