const express = require("express");
const { db } = require("../utils/db");
const { NotFoundError } = require("../utils/errors");

const clientsRouter = express.Router();

clientsRouter
  .get("/", (req, res) => {
    res.render("client/list-all", {
      clients: db.getAll(),
    });
  })
  .get("/:id", (req, res) => {
    const client = db.getOne(req.params.id);
    if (!client) {
      throw new NotFoundError();
    } else {
      res.render("client/list-one", {
        client,
      });
    }
  })
  .post("/", (req, res) => {
    const id = db.create(req.body);
    res.status(201).render("client/added", {
      name: req.body.name,
      id,
    });
  })
  .put("/:id", (req, res) => {
    const id = req.params.id;
    db.update(id, req.body);
    res.render("client/edited", {
      name: req.body.name,
      id,
    });
  })
  .delete("/:id", (req, res) => {
    const client = db.getOne(req.params.id);
    if (!client) {
      throw new NotFoundError();
    } else {
      res.render("client/deleted", {
        client,
      });
    }

  })
  .get("/forms/add", (req, res) => {
    res.render("client/forms/add");
  })
  .get("/forms/edit/:id", (req, res) => {
    const client = db.getOne(req.params.id);
    if (!client) {
      throw new NotFoundError();
    } else {
      res.render("client/forms/edit", {
        client,
      });
    }

  });

module.exports = {
  clientsRouter,
};
