'use strict';

angular.module('shomiApp')
  .config(function ($stateProvider,$urlRouterProvider) {
  	$urlRouterProvider.otherwise("/");
    $stateProvider
      .state('catalog', {
        url: '/',
        templateUrl: '/components/catalog/catalog.html',
        controller: 'CatalogCtrl'
      });
  });
