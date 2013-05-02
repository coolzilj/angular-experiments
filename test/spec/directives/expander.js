'use strict';

describe('Directive: expander', function () {
  beforeEach(module('justfortheangularbookApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<expander></expander>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the expander directive');
  }));
});
