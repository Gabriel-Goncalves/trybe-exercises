const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'gabriel',
  password: 'pranchana',
  database: 'mvc_example'});

module.exports = connection;