const express = require('express');

const { v4: uuidv4 } = require('uuid');

const controller = require('./users.controller');

const router = express.Router();

router.post('/checkUser', async (req, res, next) => {
  const message = await controller.checkUser(req.body.userName);
  res.status(200).send(message);
  res.end();
});

module.exports = router;
