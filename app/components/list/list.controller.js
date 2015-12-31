angular.module("movieApp").controller("ListCtrl", function($scope, Storage) {
  $scope.movies = Storage.get();

  $scope.movies = Storage.get();
  $scope.deleteMovie = function(index) {
    console.log("index", index)
    //Storage.deleteAndGet deletes the movie in storage, and returns the new array
    $scope.movies = Storage.deleteAndGet(index)
  }

  $scope.saveMovieToUpdate = function(index) {
    Storage.rememberIndex(index);
    Storage.savePage('/list')
  }
});