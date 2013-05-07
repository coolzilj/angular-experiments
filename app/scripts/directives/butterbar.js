'use strict';

angular.module('angularExperimentsApp')
  .directive('butterbar', ['$rootScope', function ($rootScope) {
    return {
      restrict: 'EA',
      replace: true,
      template: '<div class="butterbar-container">' +
                  '<div class="rainbow butterbar">' +
                    '<div class="inner">' +
                      '努力加载中' +
                    '</div>' +
                  '</div>' +
                '</div>',
      link: function postLink(scope, element) {
        var bar = element.find('.rainbow');
        element.addClass('hide');

        $rootScope.$on('$routeChangeStart', function() {
          element.removeClass('hide');
          bar.addClass('active');
        });

        $rootScope.$on('$routeChangeSuccess', function() {
          element.addClass('hide');
          bar.removeClass('active');
        });
      }
    };
  }]);
