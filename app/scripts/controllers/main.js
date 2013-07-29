'use strict';

app.controller('MainCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.title="TESTTITLE";
    $scope.message="Ultimate Quality Systems for Medical Devices";
    $scope.logout =function(){
      $location.path('/login');
    }
});

app.directive('showsMessageWhenHovered', function() {
  return {
    restrict: "A",//A=Attribute, C= Class Name, E=Element, M=HTML Comment
    link: function(scope, element, attributes) {
      var originalMessage = scope.message;
      element.bind("mouseover", function() {
        scope.message = attributes.message;
        scope.$apply();
      });
      element.bind("mouseout", function(){
        scope.message = originalMessage;
        scope.$apply();
      });
    }
  }
});
