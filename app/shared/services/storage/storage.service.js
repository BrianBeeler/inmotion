angular.module("movieApp")

  .factory("Storage", function() {

    var movies = [];

    var Storage = {}
    Storage.get = function() { return movies }
    Storage.add = function(movie) {
      movies.push({
        title : movie.title,
        genre: movie.genre,
        actors: movie.actors,
        year: movie.year,
        rating: movie.rating
      })
    }
    
    return Storage
  })