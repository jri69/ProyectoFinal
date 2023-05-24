require("dotenv").config();

const config = {
  APP_NAME: process.env.APP_NAME || 'API Express',
  APP_PROD: process.env.APP_PROD || 'false',
  APP_URL: process.env.APP_URL || 'http://localhost:3000',
  PORT: process.env.PORT || 3000,

  DB_CONNECTION: process.env.DB_CONNECTION || 'postgres',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || '',
  DB_DATABASE: process.env.DB_DATABASE || '',
  DB_USERNAME: process.env.DB_USERNAME || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
}

module.exports = config;
