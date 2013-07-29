'use strict';

angular.module('angularTesterApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.title="TESTTITLE";
    $scope.message="Ultimate Quality Systems for Medical Devices";
  });
