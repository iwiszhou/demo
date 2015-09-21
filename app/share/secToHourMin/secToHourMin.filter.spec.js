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
    var milSec = secToHourMin(sec);
    var newDate = new Date(milSec);
    expect(newDate.getHours()).toEqual(0);
    expect(newDate.getMinutes()).toEqual(0);
    expect(newDate.getSeconds()).toEqual(0);
  });

  it('should return 02:35:22', function () {
    var sec = 9322;
    var milSec = secToHourMin(sec);
    var newDate = new Date(milSec);
    expect(newDate.getHours()).toEqual(2);
    expect(newDate.getMinutes()).toEqual(35);
    expect(newDate.getSeconds()).toEqual(22);
  });

});
