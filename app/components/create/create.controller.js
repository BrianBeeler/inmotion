angular.module("movieApp").controller("CreateCtrl", function($scope, Storage) {
  $scope.test = "Create Controller Works"
  $scope.addMovie = function() {
    Storage.add(
      { 
        title: $scope.title,
        genre: $scope.genre,
        actors: $scope.actors,
        year: $scope.year,
        ratings: $scope.rating
      }
    )

    $scope.title = '';
    $scope.genre = '';
    $scope.actors = '';
    $scope.year = '';
    $scope.rating = '';
  }
})