angular.module('movieApp')
.controller('NavCtrl', function ($scope, $state) {
  // Controller if needed
})
.directive('navbar', function () {
  return {
    restrict: "E",
    templateUrl: "app/shared/navbar/navbar.template.html",
    controller: 'NavCtrl',
  }
})