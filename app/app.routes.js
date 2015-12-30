angular.module('movieApp').config(function ($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/")

  $stateProvider
    .state('welcome', {
      url: '/',
      templateUrl: "app/components/welcome/welcome.template.html",
      //controller: "WelcomeCtrl"
    })
    .state('search', {
      url: '/search',
      templateUrl: "app/components/search/search.template.html",
      controller: "SearchCtrl"
    })
    .state('list', {
      url: '/list',
      templateUrl: "app/components/list/list.template.html",
      controller: "ListCtrl"
    })
    .state("create", {
      url: '/create',
      templateUrl: 'app/components/create/create.template.html',
      controller:  'CreateCtrl'
    })
    .state("update", {
      url: "/update",
      templateUrl: 'app/components/update/update.template.html',
      controller: 'UpdateCtrl'
    })

});