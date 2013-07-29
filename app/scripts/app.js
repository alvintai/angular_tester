'use strict';

angular.module('angularTesterApp', [])
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

      $routeProvider.otherwise({redirectTo: '/'});
  });
