angular.module('movieApp')

.controller('NavCtrl', function ($scope, $state) {
  // Nav-Bar Controller Here If Needed
})

.directive('navbar', function () {
  return {
    restrict: "E",
    templateUrl: "app/shared/navbar/navbar.template.html",
    controller: 'NavCtrl',
  }
})