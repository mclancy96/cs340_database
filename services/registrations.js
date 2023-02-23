/**
 * This holds the queries for registrations
 */

const db = require('./db');

async function getRegistrations() {
    const registrations = await db.query(
        `SELECT * FROM Registrations`
    );

    return registrations;
}

module.exports = {
    getRegistrations
}