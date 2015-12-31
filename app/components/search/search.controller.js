angular.module("movieApp").controller("SearchCtrl", function($scope, $location, Storage) {
  $scope.movies = Storage.get();
  $scope.deleteMovie = function(index) {
    console.log("index", index)
    //Storage.deleteAndGet deletes the movie in storage, and returns the new array
    $scope.movies = Storage.deleteAndGet(index)
  }

  $scope.saveMovieToUpdate = function(index) {

    console.log("is this working??")
    Storage.rememberIndex(index);
    Storage.savePage('#/search')
    $location.path("/update")
  }
})