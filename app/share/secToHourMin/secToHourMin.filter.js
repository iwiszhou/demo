'use strict';

angular.module('shomiApp')
  .filter('secToHourMin', function () {
    return function(seconds) {
    	if(!seconds){
    		return new Date().setHours(0,0,0,0);
    	}
		return new Date(1970, 0, 1).setSeconds(seconds) || 0;
    };
  });
