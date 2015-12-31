angular.module("movieApp").controller("UpdateCtrl", function($scope, Storage) {
  $scope.movieAndIndex = Storage.rememberIndex();
  console.log("clue:", $scope.movieAndIndex)
  $scope.movie = $scope.movieAndIndex[1];
  $scope.index = $scope.movieAndIndex[0];
  $scope.update = false;
  $scope.back = Storage.getPreviousPage();
  console.log("Back", $scope.back)

  $scope.updateMovie = function() {
    Storage.update($scope.movie, $scope.index);
    $scope.updated = true;
  }
})