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

async function getClassById(classId) {
    const classes = await db.query(
        `SELECT * FROM Classes WHERE class_id = ${classId}`
    );
    return classes;
}

async function createClass(classObject) {
    const updateStatus = await db.query(
        `INSERT INTO Classes (name, street_address, city, state, zip_code, email, phone_number)
        VALUES("${classObject.name}", 
        "${classObject.street_address}",
        "${classObject.city}", 
        "${classObject.state}", 
        "${classObject.zip_code}", 
        "${classObject.email}", 
        "${classObject.phone_number}");`
    );
    return updateStatus;
}

async function updateClass(classId, classObject) {
    const updateStatus = await db.query(
        `UPDATE Classes
        SET name = "${classObject.name}", 
        street_address= "${classObject.street_address}",
        city="${classObject.city}", 
        state="${classObject.state}", 
        zip_code = "${classObject.zip_code}", 
        email = "${classObject.email}", 
        phone_number= "${classObject.phone_number}"
        WHERE class_id = "${classId}";`
    );
    return updateStatus;
}

async function deleteClass(classId) {
    const updateStatus = await db.query(
        `DELETE FROM Classes WHERE class_id = "${classId}";`
    );
    return updateStatus;
}

module.exports = {
    getClasses,
    getClassById,
    createClass,
    updateClass,
    deleteClass
}