'use strict';

describe('Controller: DivPaginationCtrl', function () {

  // load the controller's module
  beforeEach(module('shomiApp'));

  var DivPaginationCtrl, scope, mockList, perPage = 20;

  mockList = [
    {
      title: "a",
      duration : "02:50:30",
      releaseYear : "1990"
    },
    {
      title: "b",
      duration : "02:50:30",
      releaseYear : "1990"
    },
    {
      title: "d",
      duration : "02:50:30",
      releaseYear : "1990"
    },
    {
      title: "c",
      duration : "02:50:30",
      releaseYear : "1990"
    },
    {
      title: "e",
      duration : "02:50:30",
      releaseYear : "1990"
    },
    {
      title: "f",
      duration : "02:50:30",
      releaseYear : "1990"
    },
    {
      title: "g",
      duration : "02:50:30",
      releaseYear : "1990"
    },
    {
      title: "h",
      duration : "02:50:30",
      releaseYear : "1990"
    },
    {
      title: "i",
      duration : "02:50:30",
      releaseYear : "1990"
    },
    {
      title: "j",
      duration : "02:50:30",
      releaseYear : "1990"
    },
    {
      title: "k",
      duration : "02:50:30",
      releaseYear : "1990"
    },
    {
      title: "l",
      duration : "02:50:30",
      releaseYear : "1990"
    }
  ];

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    scope.list = mockList;
    scope.perPage = 5;
    DivPaginationCtrl = $controller('DivPaginationCtrl', {
      $scope: scope
    });
  }));

  it('should return array with size 3', function () {
    var arr = scope.getNumber(3);

    expect(arr.length).toEqual(3);
  });

  it('should return partialList with size 5', function () {
    var arr = scope.paginationClick(0);

    expect(scope.partialList.length).toEqual(5);
    expect(scope.partialList[0].title).toEqual("a");
    expect(scope.partialList[2].title).toEqual("d");
    expect(scope.partialList[3].title).toEqual("c");
    expect(scope.partialList[4].title).toEqual("e");
  });

  it('should return partialList with size 5 - test 2', function () {
    var arr = scope.paginationClick(1);

    expect(scope.partialList.length).toEqual(5);
    expect(scope.partialList[0].title).toEqual("f");
    expect(scope.partialList[4].title).toEqual("j");
  });

  it('should return partialList with size 5 - test 3', function () {
    var arr = scope.paginationClick(2);

    expect(scope.partialList.length).toEqual(2);
    expect(scope.partialList[0].title).toEqual("l");
    expect(scope.partialList[1].title).toEqual("k");
  });

  it('should return new order of list', function () {
    scope.sortByModel.value = "title";
    
    scope.updateSort();

    expect(scope.list.length).toEqual(12);
    
    expect(scope.list[0].title).toEqual("a");
    expect(scope.list[2].title).toEqual("c");
    expect(scope.list[3].title).toEqual("d");
    expect(scope.list[4].title).toEqual("e");
    expect(scope.list[10].title).toEqual("k");
    expect(scope.list[11].title).toEqual("l");
  });
});
