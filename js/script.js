var angCar = angular.module('angCar', ['ui.bootstrap'])
.controller('NavbarController', ['$scope', function($scope){
  $scope.isCollapsed = true;
}]);