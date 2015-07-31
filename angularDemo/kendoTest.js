var myApp = angular.module('myApp',['kendo.directives']);
myApp.controller("myCtrl", ['$scope', function($scope) {
  $scope.customers = [
  	{"id":1, name:"andre", sex:"male"},
  	{"id":2, name:"carol", sex:"female"},
  	{"id":3, name:"blake", sex:"male"}
  ];

  $scope.update = function() {
  	$scope.customers[0].sex = "N/A";
  	console.log($scope.customers);
  };

}]);