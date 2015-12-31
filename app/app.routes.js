// Set Routes

angular.module('movieApp').config(function ($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/");

  $stateProvider
    
    // Welcome Page
    .state('welcome', {
      url: '/',
      templateUrl: "app/components/welcome/welcome.template.html",
    })
    
    // Search
    .state('search', {
      url: '/search',
      templateUrl: "app/components/search/search.template.html",
      controller: "SearchCtrl"
    })
    
    // List (See all Movies)
    .state('list', {
      url: '/list',
      templateUrl: "app/components/list/list.template.html",
      controller: "ListCtrl"
    })

    // Create a Movie
    .state("create", {
      url: '/create',
      templateUrl: 'app/components/create/create.template.html',
      controller:  'CreateCtrl'
    })

    // Update a Movie
    .state("update", {
      url: "/update",
      templateUrl: 'app/components/update/update.template.html',
      controller: 'UpdateCtrl'
    });
});