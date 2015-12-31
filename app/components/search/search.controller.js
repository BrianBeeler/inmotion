angular.module("movieApp").controller("SearchCtrl", function($scope, Storage) {
  $scope.movies = Storage.get();
})