const client = require('./dataClient');
const debug = require('debug')("dataMapper");

const APIError = require('../service/APIError');

const dataMapper = {
  async getMovies(){
    const query = "SELECT * FROM movie";
    const result = await client.query(query);
    return result.rows;
  },

  async addMovie(movieTitle){
    let query = {
      text: "SELECT * FROM movie WHERE title=$1",
      values: [movieTitle],
    }
    const result = await client.query(query);
    debug(result)
    if(result.rowCount > 0){
      debug('Le film est déjà présent en base.');
      throw new APIError(`Le film ${movieTitle} est déjà présent en base`);
    }
    query = {
      text: "INSERT INTO movie (title) VALUES ($1)",
      values: [movieTitle],
    }
    return await client.query(query);
  },
};

module.exports = dataMapper;