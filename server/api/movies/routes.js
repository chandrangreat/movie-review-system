const express = require('express');

const controller = require('./movies.controller');
const checkAdmin = require('../checkAdmin');

const router = express.Router();

router.use(checkAdmin());

router.get('/', async (req, res, next) => {
  const movies = await controller.getMovies();
  res.status(200).send(movies);
  res.end();
  next();
});

router.get('/:movieId', async (req, res, next) => {
  const { movieId } = req.params;
  const movie = await controller.getMovie(movieId);
  res.status(200).send(movie);
  res.end();
  next();
});

router.post('/', (req, res, next) => {
  controller.saveMovie(req.body).then((result) => {
    res.status(201).send(result);
    res.end();
    next();
  });
});

router.post('/:movieId/review', (req, res, next) => {
  const { movieId } = req.params;
  controller.saveReview(movieId, req.body).then((result) => {
    res.status(201).send({ message: result });
    res.end();
    next();
  });
});

module.exports = router;
