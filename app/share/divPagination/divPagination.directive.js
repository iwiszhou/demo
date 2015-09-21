'use strict';

angular.module('shomiApp')
	.controller('DivPaginationCtrl', function ($scope,$filter) {
		$scope.getNumber = function(num) {
		    return new Array(num);   
		}

		$scope.paginationClick = function(index){
			var startPos, endPos;

			$scope.currentPage = index + 1;
			startPos = index * $scope.perPage;
			endPos = startPos + $scope.perPage;

			$scope.partialList = $scope.list.slice(startPos, endPos);
		}

		$scope.updateSort = function(){
			$scope.list = $filter("orderBy")($scope.list,$scope.sortByModel.value);
			$scope.paginationClick(0);
		}
	})
	.directive('divPagination', function () {
		var linkFn;
		
		linkFn = function (scope, element, attrs) {
			scope.list = scope.list || [];
			scope.totalPage = Math.ceil( scope.list.length / scope.perPage );
			scope.paginationClick(0);
			scope.sortByModel = scope.sortingList[0];
		}

		return {
			scope : {
				list : "=",
				perPage : "=",
				sortingList : "="
			},
			templateUrl: 'share/divPagination/divPagination.html',
			restrict: 'EA',
			link: linkFn,
			controller: 'DivPaginationCtrl'
	};
	});
