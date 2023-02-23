/**
 * This holds the queries for classes
 */

const db = require('./db');

async function getClasses() {
    const classes = await db.query(
        `SELECT * FROM Classes`
    );

    return classes;
}

module.exports = {
    getClasses
}