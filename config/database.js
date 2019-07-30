const { Pool, Client } = require('pg');

var connectionString = "postgres://postgres:123456@localhost:5432/virtualclassroom";

const con = new Pool({
  connectionString: connectionString,
})

module.exports = con;
