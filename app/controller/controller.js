const dataMapper = require('../model/dataMapper');
const debug = require('debug')('Controller');


const controller = {
  async getMovies (req, res, next){
    const results = await dataMapper.getMovies();
    res.send(results);
  },

  async addMovie(req, res, next){
    debug("Ajout d'un film en BDD", req.body);
    const results = await dataMapper.addMovie(req.body.title);
    res.send(results);
  },
}

module.exports = controller;