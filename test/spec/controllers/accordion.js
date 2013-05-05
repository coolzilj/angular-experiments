'use strict';

describe('Controller: AccordionCtrl', function () {

  // load the controller's module
  beforeEach(module('angularExperimentsApp'));

  var AccordionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccordionCtrl = $controller('AccordionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
