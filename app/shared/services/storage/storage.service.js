angular.module("movieApp")

  .factory("Storage", function() {

    // ***Storage Variables***

    // Hardcoded movie data
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

    var rememberedIndex = null;
    var previousPage = null;
    var searchText = null;

    // Factory object
    var Storage = {};

    // ***CRUD Operations***

    // Get all movies
    Storage.getMovies = function() { return movies }

    // Add a movie
    Storage.addMovie = function(movie) {
      movies.push({
        title : movie.title,
        genre: movie.genre,
        actors: movie.actors,
        year: movie.year,
        rating: movie.rating
      })
    }

    // Delete a movie; return updated array
    Storage.deleteAndGet = function(index) {
      movies.splice(index,1);
      return movies;
    }

    // Update a Movie
    Storage.updateMovie = function(updatedMovie, index) {
      movies.splice(index, 1, updatedMovie);
    }

    // ***Getter/Setters***

    // Movie Index
    Storage.Movie = function(index) {
      if (index!==undefined) {
        rememberedIndex = index;
      }
      else {
        // *Note: returns index AND the movie
        return [rememberedIndex, movies[rememberedIndex]];
      }
    }

    // Page URL
    Storage.Page = function(url) {
      if (url!==undefined) {
         previousPage = url;
      }
      else {
        return previousPage
      }
    }

    // Search Text
    Storage.SearchText = function(text) {
      if (text!==undefined) {
        searchText = text;
      }
      else {
        return searchText;
      }
    }

    return Storage
  });