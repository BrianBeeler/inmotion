angular.module("movieApp").controller("UpdateCtrl", function($scope, Storage) {
  $scope.movieAndIndex = Storage.rememberIndex();
  console.log("clue:", $scope.movieAndIndex)
  $scope.movie = $scope.movieAndIndex[1];
  $scope.index = $scope.movieAndIndex[0];

  $scope.updateMovie = function() {
    Storage.update($scope.movie, $scope.index);
  }
})