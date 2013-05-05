'use strict';

describe('Directive: stickyNote', function () {
  beforeEach(module('angularExperimentsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<sticky-note></sticky-note>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the stickyNote directive');
  }));
});
