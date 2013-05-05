'use strict';

describe('Controller: DatepickerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularExperimentsApp'));

  var DatepickerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatepickerCtrl = $controller('DatepickerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
