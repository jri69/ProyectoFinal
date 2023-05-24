const usersRouter = require('../components/users/userRoute');
const apiRouter = require('../components/api/apiRoute');
const express = require('express');

function mainRouter(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/usuarios', usersRouter);
  router.use('/estado', apiRouter);
}

module.exports = mainRouter;
