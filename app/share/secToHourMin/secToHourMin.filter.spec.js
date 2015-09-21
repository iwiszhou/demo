'use strict';

describe('Filter: secToHourMin', function () {

  // load the filter's module
  beforeEach(module('shomiApp'));

  // initialize a new instance of the filter before each test
  var secToHourMin;
  beforeEach(inject(function ($filter) {
    secToHourMin = $filter('secToHourMin');
  }));

  it('should return 0', function () {
    var sec = undefined;
    var result = secToHourMin(sec);
    expect(result.getHours()).toEqual(0);
  });

});
