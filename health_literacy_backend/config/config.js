require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'boss',  
    database: process.env.DB_NAME || 'personal'  
  }
};

module.exports = config;
