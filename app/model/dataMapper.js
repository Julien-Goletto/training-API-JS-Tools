const client = require('./dataClient');
const debug = require('debug')("dataMapper");

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
      return debug('Le film est déjà présent en base.');
    }
    query = {
      text: "INSERT INTO movie (title) VALUES ($1)",
      values: [movieTitle],
    }
    await client.query(query);
  },
};

module.exports = dataMapper;