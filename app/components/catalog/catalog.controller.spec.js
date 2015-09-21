'use strict';

describe('Controller: CatalogCtrl', function () {

  // load the controller's module
  beforeEach(module('shomiApp'));

  var CatalogCtrl, scope, mockCatalogService, q, deferred;

  mockCatalogService = {
    fetchFeed : function(){

    },
    getSortingList : function(){

    }
  }

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    scope = $rootScope.$new();
    q = $q;
    deferred = q.defer();
    spyOn(mockCatalogService,'fetchFeed').and.returnValue(deferred.promise);
    spyOn(mockCatalogService,'getSortingList').and.returnValue([{},{},{}]);
    
    CatalogCtrl = $controller('CatalogCtrl', {
      $scope: scope,
      CatalogService : mockCatalogService
    });

  }));

  it('should fetch catalog data when controller init', function () {
    expect(mockCatalogService.fetchFeed).toHaveBeenCalled();
  });

  it('should fetch sorting list data when controller init', function () {
    expect(mockCatalogService.getSortingList).toHaveBeenCalled();
    expect(scope.sortingList).toBeDefined();
  });
});
