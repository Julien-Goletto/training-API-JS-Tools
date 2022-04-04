const express = require("express");
const controller = require("./controller/controller");

const routerWrapper = require('./middleware/routerWrapper');
const handleErrors = require('./middleware/handleErrors');
const APIError = require("./service/APIError");

const router = express.Router();

router
      .get("/movies", routerWrapper(controller.getMovies))
      .post("/movies", routerWrapper(controller.addMovie))

      // Gestion de la 404 par production d'une erreur spécifique
      .use((req, res, next) => {
        next(new APIError("This URL cannot be found", req.url, 404));
      })
      // Collecteur d'erreur pour le log
      .use(handleErrors);

module.exports = router;