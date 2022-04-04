const {Client} = require ('pg');
const client = new Client({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  database: process.env.PG_DB_NAME,
});
client.connect();

module.exports = client;