'use strict';

describe('Service: CatalogService', function () {

  // load the service's module
  beforeEach(module('shomiApp'));

  // instantiate service
  var catalogService, httpBackend, mockData, expectRetrunObj;

  mockData = {
    Data : [
      {
        Item : {
          "AssetId":"b1cd814c-73c4-4495-8d90-8fe810b287d4",
          "Title":"A Prophet",
          "ContentType":"Movie",
          "ReleaseYear":"2010",
          "RunTimeSec":9322,
          "Images":[
               {
                  "Type":6,
                  "ImageId":"http://cdn-01.images.techops.shomi.com/images/Shomi_-_Production/703/1019/feature_tc818002432724-0_tm-04-09-00-36.bif"
               },
               {
                  "Type":8,
                  "ImageId":"http://cdn-01.images.techops.shomi.com/images/Shomi_-_Production/703/1019/feature_tc818002432724-0_tm-04-11-00-38.bif"
               },
               {
                  "Type":3,
                  "ImageId":"http://cdn-01.images.techops.shomi.com/images/Shomi_-_Production/703/1019/AProphet_SVOD_MarketingImage2_16x9.jpg"
               },
               {
                  "Type":2,
                  "ImageId":"http://cdn-01.images.techops.shomi.com/images/Shomi_-_Production/703/1019/AProphet_SVOD_MarketingImage1_10x3.jpg"
               },
               {
                  "Type":1,
                  "ImageId":"http://cdn-01.images.techops.shomi.com/images/Shomi_-_Production/703/1019/AProphet_SVOD_Poster.jpg"
               }
          ]
        }
      }
    ]
  }

  expectRetrunObj = {
    "assetId" : "b1cd814c-73c4-4495-8d90-8fe810b287d4",
    "title" : "A Prophet",
    "duration" : "",
    "releaseYear" : "2010",
    "imageUrl" : "http://cdn-01.images.techops.shomi.com/images/Shomi_-_Production/703/1019/AProphet_SVOD_Poster.jpg"
  }

  beforeEach(inject(function (_CatalogService_, $httpBackend) {
    catalogService = _CatalogService_;
    httpBackend = $httpBackend;
    httpBackend.whenGET("json/feed.json").respond(mockData);
  }));

  it('should return sorting list when calling getSortingList', function () {
    var list = catalogService.getSortingList();
    expect(list.length).toEqual(4);

    expect(list[0].name).toEqual("None");
    expect(list[0].value).toEqual("");

    expect(list[1].name).toEqual("Title");
    expect(list[1].value).toEqual("title");

    expect(list[2].name).toEqual("Duration");
    expect(list[2].value).toEqual("duration");

    expect(list[3].name).toEqual("ReleaseYear");
    expect(list[3].value).toEqual("releaseYear");
  });

  it('should fetch feed data from json file',function(){

    var promise  = catalogService.fetchFeed();

    httpBackend.flush();

    promise.then(function(_mockData){
      console.log(_mockData);
      expect(_mockData).toEqual(expectRetrunObj);
    });
  })

});
