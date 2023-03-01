/**
 * This file holds the configurations for our database.
 */
require("dotenv").config();

const config = {
  db: {
    host: process.env.HOST,
    user: process.env.USERDB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
};
module.exports = config;