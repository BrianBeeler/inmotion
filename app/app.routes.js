angular.module('movies').config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/")

  $stateProvider
    .state("/", {
      url: "/",
      templateUrl: "",
      controller: ""
    })
});