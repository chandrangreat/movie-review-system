const { MoviesModel, RatingsModel } = require('./movies.entity');

const getMovies = async () => {
  try {
    const movies = await MoviesModel.find({});
    return movies;
  } catch (error) {
    return err;
  }
};

const getMovie = async (movieId) => {
  try {
    const movie = await MoviesModel.findById(movieId);
    return movie;
  } catch (error) {
    return err;
  }
};

const saveMovie = (movie) => {
  return new Promise((resolve, reject) => {
    let newMovie = new MoviesModel(movie);

    newMovie.save((err, addedMovie) => {
      if (err) reject(err.message);
      else {
        resolve(addedMovie);
      }
    });
  });
};

const saveRatings = async (movieId, rating) => {
  try {
    const movie = await MoviesModel.findById(movieId);
    movie.ratings.push(rating);
    const updated = await movie.save();
    return updated;
  } catch (err) {
    return err;
  }
};

module.exports = { getMovies, saveMovie, saveRatings, getMovie };
