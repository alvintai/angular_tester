'use strict';

var app = angular.module('angularTesterApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
      /*.otherwise({
        redirectTo: '/'
      });*/

      $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      });

      $routeProvider
      .when('/tutorial', {
        templateUrl: 'views/tutorial.html',
      });

      $routeProvider.otherwise({redirectTo: '/'});
  });
