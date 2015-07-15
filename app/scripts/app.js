'use strict';

/**
 * @ngdoc overview
 * @name myexamApp
 * @description
 * # myexamApp
 *
 * Main module of the application.
 */
angular
  .module('myexamApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'lumx'
  ])
  .config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    /*$routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });*/
  });
