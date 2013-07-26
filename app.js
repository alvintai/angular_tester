//setter
var app = angular.module("app",[]).config(function($routeProvider){
  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });

  $routeProvider.otherwise({redirectTo: '/login'});
});

app.controller('LoginController', function($scope){
  $scope.credentials = {username: "", password: ""};
});

app.controller('HomeController', function($scope){

});