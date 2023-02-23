/**
 * This file allow us to connect to the database using the configurations
 * held in the config.js file.
 */
const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const [results,] = await connection.execute(sql, params);

    return results;
}

module.exports = {
    query
}