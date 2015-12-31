angular.module("movieApp").controller("UpdateCtrl", function($scope, Storage) {
  
  // Get selected movie and its index
  $scope.movieAndIndex = Storage.Movie();
  
  // Seperate from tuple
  $scope.movie = $scope.movieAndIndex[1];
  $scope.index = $scope.movieAndIndex[0];
  
  // Initialize 'updated' status, and set 'back' location
  $scope.updated = false;
  $scope.back = Storage.Page();

  // Updates movie in storage
  $scope.updateMovie = function() {
    Storage.updateMovie($scope.movie, $scope.index);
    $scope.updated = true;
  }
})