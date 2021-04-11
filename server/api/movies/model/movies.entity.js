const mongoose = require('mongoose');
const User = require('../../users/model/users.entity');

const Schema = mongoose.Schema;

const ratingsSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },

  userName: {
    type: String,
    ref: User,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4, 5],
  },

  comment: {
    type: String,
    required: true,
  },

  likes: {
    type: Number,
  },

  dislikes: {
    type: Number,
  },
});

const RatingsModel = mongoose.model('Ratings', ratingsSchema);

const moviesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  overallRating: {
    type: Number,
  },

  cast: {
    type: String,
  },

  genre: {
    type: String,
  },

  releaseDate: {
    type: String,
  },

  language: {
    type: String,
  },

  ratings: {
    type: [ratingsSchema],
    default: [],
  },
});

const MoviesModel = mongoose.model('Movies', moviesSchema);

module.exports = { MoviesModel, RatingsModel };
