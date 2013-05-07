'use strict';

describe('Directive: butterbar', function () {
  beforeEach(module('angularExperimentsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<butterbar></butterbar>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the butterbar directive');
  }));
});
