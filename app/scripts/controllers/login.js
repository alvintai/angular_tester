'use strict';

angular.module('angularTesterApp')
  .controller('LoginCtrl', function ($scope, $location) {
    window.scope = $scope;
 $scope.credentials={email:"", password:""};

 $scope.login = function(){
  if ($scope.credentials.email !== "ralph"){
    alert('Username cannot be ' + $scope.credentials.email + '. it must be ralph');
  } else if ($scope.credentials.email === "ralph") {
    $location.path('/');

  };

 };
});
