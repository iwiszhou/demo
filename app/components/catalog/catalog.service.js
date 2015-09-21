'use strict';

angular.module('shomiApp')
  .service('CatalogService', function ($resource, $q) {
    var fetchFeed,
    	getSortingList,
    	_uiDataMapping,
    	_findImageByType;

    _findImageByType = function(images,type){
    	var imageUrl;

    	if(!images){
    		return;
    	}

    	for(var i=0; i<images.length; i++){
    		if(images[i] && images[i].Type === type && images[i].ImageId){
    			imageUrl = images[i].ImageId;
    		}
    	}

    	return imageUrl;
    }

    _uiDataMapping = function(item){
    	var uiItem = {};
    	
    	if(!item){
    		return;
    	}

    	uiItem.assetId = item.AssetId;
    	uiItem.title = item.Title;
    	uiItem.duration = item.RunTimeSec || 0;
    	uiItem.releaseYear = item.ReleaseYear || 0;
    	uiItem.imageUrl = _findImageByType(item.Images, 1);
    	if(uiItem.imageUrl){
    		return uiItem;
    	}

    	return;
    }

    fetchFeed = function(){
    	var deferred = $q.defer();
    	$resource('json/feed.json').get({},
    		function(data){
    			var imageTypeOne = [],
    				i,
    				itemImage;

    			for(var i=0; i<data.Data.length; i++){
    				if(data.Data[i] && data.Data[i].Item){
	    				itemImage = _uiDataMapping(data.Data[i].Item);
	    				if(itemImage){
	    					imageTypeOne.push(itemImage);
	    				}
    				}
    			}

    			deferred.resolve(imageTypeOne);
    		},
    		function(error){
    			deferred.reject({error : true});
    		}
    	);
    	return deferred.promise;
    }

    getSortingList = function(){
    	return [
    		{
    			name : "None",
    			value : ""
    		},
    		{
    			name : "Title",
    			value : "title"
    		},
    		{
    			name : "Duration",
    			value : "duration"
    		},
    		{
    			name : "ReleaseYear",
    			value : "releaseYear"
    		}
    	];
    }

    return {
    	fetchFeed : fetchFeed,
    	getSortingList : getSortingList
    }
  });
