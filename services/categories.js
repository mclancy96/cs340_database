/**
 * This holds the queries for categories
 */

const db = require('./db');

async function getCategories() {
    const categories = await db.query(
        `SELECT * FROM Class_Categories`
    );

    return categories;
}

module.exports = {
    getCategories
}