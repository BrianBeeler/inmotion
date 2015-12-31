angular.module("movieApp").controller("SearchCtrl", function($scope, $location, Storage) {
  
  //Get movies and previous search from storage
  $scope.movies = Storage.getMovies();
  $scope.searchText = Storage.SearchText();

  // Delete movie, update $scope.movies
  $scope.deleteMovie = function(index) {
    $scope.movies = Storage.deleteAndGet(index)
  }

  //Save page, search-text, movie; go to update form
  $scope.updateMovie = function(index) {
    Storage.Page('#/search')
    Storage.SearchText($scope.searchText)
    Storage.Movie(index);  
    $location.path("/update")
  }
})