angular.module("movieApp").controller("CreateCtrl", function($scope, Storage) {

  $scope.created = false

  // Click handler to creat a movie
  $scope.addMovie = function() {

    // Add the movie in storage Factory
    Storage.addMovie(
      { 
        title: $scope.title,
        genre: $scope.genre,
        actors: $scope.actors,
        year: $scope.year,
        ratings: $scope.rating
      }
    )

    $scope.created = $scope.title;

    // Clear form
    $scope.title = '';
    $scope.genre = '';
    $scope.actors = '';
    $scope.year = '';
    $scope.rating = '';
  }
})