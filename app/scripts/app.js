'use strict';

/**
 * @ngdoc overview
 * @name xplosionApp
 * @description
 * # xplosionApp
 *
 * Main module of the application.
 */
angular
  .module('xplosionApp', ['ngRoute'])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/our-products', {
        templateUrl: 'views/our-products.html',
        controller: 'OurProductsCtrl',
        controllerAs: 'ourProducts'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/where-to-buy', {
        templateUrl: 'views/where-to-buy.html',
        controller: 'WhereToBuyCtrl',
        controllerAs: 'whereToBuy'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
