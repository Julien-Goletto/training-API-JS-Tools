const express = require("express");
const controller = require("./controller/controller");

const router = express.Router();

router
      .get("/movies", controller.getMovies)
      .post("/movies", controller.addMovie);

module.exports = router;