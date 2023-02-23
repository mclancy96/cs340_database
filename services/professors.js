/**
 * This holds the queries for professors
 */

const db = require('./db');

async function getProfessors() {
    const professors = await db.query(
        `SELECT * FROM Professors`
    );

    return professors;
}

module.exports = {
    getProfessors
}