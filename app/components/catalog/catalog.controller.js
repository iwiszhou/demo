'use strict';

angular.module('shomiApp')
  .controller('CatalogCtrl', function ($scope, $timeout, CatalogService) {
    
    //Init fetch data
    CatalogService.fetchFeed().then(
    	function(data){
    		//Try to simulate real network call/delay
    		$timeout(function(){
    			$scope.catalogData = data;
    		},1000);
    	},
    	function(){
    		$scope.errorMsg = "Sorry. Can't retrieve data. Please retry later...";
    	}
    );

    $scope.sortingList = CatalogService.getSortingList();
  });
