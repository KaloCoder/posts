const Pool = require("pg").Pool
const pool = new Pool({
  user: "your name",
  password: "your pass",
  host: "your host",
  port: "your port",
  database: "your db",
});

module.exports = pool
