const mysql = require('mysql2');
const config = require('../config/config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    process.exit(1);
  }
  console.log('Connected to database');
});

module.exports = connection;