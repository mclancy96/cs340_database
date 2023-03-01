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

async function getProfessorById(professorId) {
    const professor = await db.query(
        `SELECT * FROM Professors WHERE professor_id = ${professorId}`
    );

    return professor;
}

async function createProfessor(professorObject) {
    const updateStatus = await db.query(
        `INSERT INTO Professors (name, street_address, city, state, zip_code, email)
        VALUES("${professorObject.name}",
        "${professorObject.street_address}",
        "${professorObject.city}",
        "${professorObject.state}",
        "${professorObject.zip_code}",
        "${professorObject.email}");`
    );
    return updateStatus;
}

async function updateProfessor(professorId, professorObject) {
    const updateStatus = await db.query(
        `UPDATE Professors
        SET name = "${professorObject.name}", 
        street_address = "${professorObject.street_address}", 
        city = "${professorObject.city}",
        state = "${professorObject.state}", 
        zip_code = "${professorObject.zip_code}", 
        email = "${professorObject.email}"
        WHERE professor_id = "${professorId}";`
    );
    return updateStatus;
}

async function deleteProfessor(professorId) {
    const updateStatus = await db.query(
        `DELETE FROM Professors WHERE professor_id = "${professorId}";`
    );
    return updateStatus;
}


module.exports = {
    getProfessors,
    getProfessorById,
    updateProfessor,
    createProfessor,
    deleteProfessor
}