const express = require('express');

const clientsRouter = express.Router();

clientsRouter.get('/', (req, res) => {
  res.send('działa');
});

module.exports = {
  clientsRouter,
};
