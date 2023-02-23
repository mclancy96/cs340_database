/**
 * This holds the queries for students
 */

const db = require('./db');

async function getStudents() {
    const students = await db.query(
        `SELECT * FROM Students`
    );

    return students;
}

module.exports = {
    getStudents
}