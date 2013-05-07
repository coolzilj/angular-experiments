'use strict';

describe('Service: MultiNoteLoader', function () {

  // load the service's module
  beforeEach(module('angularExperimentsApp'));

  // instantiate service
  var MultiNoteLoader;
  beforeEach(inject(function (_MultiNoteLoader_) {
    MultiNoteLoader = _MultiNoteLoader_;
  }));

  it('should do something', function () {
    expect(!!MultiNoteLoader).toBe(true);
  });

});
