angular.module("movieApp").controller("ListCtrl", function($scope, $location, Storage) {
  
  // Get all movies from storage
  $scope.movies = Storage.getMovies();

  // Delete a movie and refresh $scope.movies
  $scope.deleteMovie = function(index) {
    $scope.movies = Storage.deleteAndGet(index)
  }

  $scope.updateMovie = function(index) {
    // Save movie & current page
    Storage.Movie(index);
    Storage.Page('#/list');
    // Go to update form
    $location.path("/update");
  }
});