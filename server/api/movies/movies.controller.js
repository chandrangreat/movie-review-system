const moviesDAO = require('./model/movies.dao');

let getMovies = async () => {
  try {
    const movies = await moviesDAO.getMovies();
    return movies;
  } catch (error) {
    return error;
  }
};

let getMovie = async (movieId) => {
  try {
    const movie = await moviesDAO.getMovie(movieId);
    return movie;
  } catch (error) {
    return error;
  }
};

let saveMovie = (movie) => {
  return moviesDAO
    .saveMovie(movie)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

let saveReview = (movieId, review) => {
  const { userId, userName, rating, comment } = review;

  return moviesDAO
    .saveRatings(movieId, { userId, userName, rating, comment })
    .then((response) => {
      return 'Ratings saved';
    })
    .catch((err) => {
      return err;
    });
};

module.exports = { getMovies, saveMovie, saveReview, getMovie };
