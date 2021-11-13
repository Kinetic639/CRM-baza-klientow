const express = require('express');
const {db} = require("../utils/db");

const clientsRouter = express.Router();

clientsRouter
  .get('/', (req, res) => {
    res.render('client/list-all', {
      clients: db.getAll()
    })
  })
  .get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`pobierz pojedynczego klienta o id: ${id}`);
  })
  .post('/:id', (req, res) => {
    res.send('Dodaj nowego klienta!');
  })
  .put('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Zmodyfikuj klienta o id ${id}!`);
  })
  .delete('/:id', (req, res) => {
    const id = req.params.id;ś
    res.send(`Usuń klienta o id ${id}!`);
  });

module.exports = {
  clientsRouter,
};
