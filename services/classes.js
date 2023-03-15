/**
 * This holds the queries for classes
 */

const db = require('./db');

async function getClasses() {
    const classes = await db.query(
        `SELECT Classes.class_id, Professors.professor_id AS professor_id, Professors.name AS professor_name, Class_Categories.class_category_id AS category_id, Class_Categories.name AS class_category_name, 
            Classes.name AS class_name, COUNT(Registrations.class_id) AS current_enrollment, Classes.max_enrollment
        FROM Classes
            INNER JOIN Professors
            ON Classes.professor_id = Professors.professor_id
            INNER JOIN Class_Categories
            ON Classes.class_category_id = Class_Categories.class_category_id
            LEFT JOIN Registrations
            ON Classes.class_id = Registrations.class_id
        GROUP BY Classes.class_id`
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
        `INSERT INTO Classes (name, professor_id, class_category_id, current_enrollment, max_enrollment)
        VALUES("${classObject.name}", 
        "${classObject.professor_id}",
        "${classObject.class_category_id}", 
        "0", 
        "${classObject.max_enrollment}");`
    );
    return updateStatus;
}

async function updateClass(classId, classObject) {
    const updateStatus = await db.query(
        `UPDATE Classes
        SET name = "${classObject.name}", 
        professor_id= "${classObject.professor_id}",
        class_category_id="${classObject.class_category_id}", 
        max_enrollment = "${classObject.max_enrollment}"
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