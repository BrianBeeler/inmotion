angular.module("movieApp").controller("ListCtrl", function($scope, Storage) {
  $scope.movies = Storage.get();
})