angular.module("movieApp")

  .factory("Storage", function() {

    // Give site some initial movie data
    var movies = [
      { title: "Star Wars: The Force Awakens",
        genre: "Fantasy/Science fiction",
        actors: "Daisy Ridley, John Boyega, Harrison Ford",
        year: 2015,
        rating: 8.6
       },
       { title: "Daddy's Home",
        genre: "Comedy",
        actors: "Will Ferrell, Linda Cardellini, Mark Wahlberg",
        year: 2015,
        rating: 6.6
       },
       { title: "Joy" ,
        genre: "Drama film/History",
        actors: "Jennifer Lawrence" ,
        year: 2015,
        rating: 6.6
       },
       { title: "Titanic" ,
        genre: "Drama, Romance",
        actors: "Leanardo DiCaprio, Kate Winslet",
        year: 1997,
        rating: 7.7
       }
    ];

    // Storage service is used to add movies to list, or get all the movies
    var Storage = {}

    // Get all movies
    Storage.get = function() { return movies }

    // Add a movie to the list
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