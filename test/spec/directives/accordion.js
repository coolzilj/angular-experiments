'use strict';

describe('Directive: accordion', function () {
  beforeEach(module('justfortheangularbookApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<accordion></accordion>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the accordion directive');
  }));
});
