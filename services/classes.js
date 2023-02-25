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
        `INSERT INTO Classes (name, professor_id, class_category_id, current_enrollment, max_enrollment, semester)
        VALUES("${classObject.name}", 
        "${classObject.professor_id}",
        "${classObject.class_category_id}", 
        "0", 
        "${classObject.max_enrollment}", 
        "${classObject.semester}");`
    );
    return updateStatus;
}

async function updateClass(classId, classObject) {
    const updateStatus = await db.query(
        `UPDATE Classes
        SET name = "${classObject.name}", 
        professor_id= "${classObject.professor_id}",
        class_category_id="${classObject.class_category_id}", 
        current_enrollment="${classObject.current_enrollment}", 
        max_enrollment = "${classObject.max_enrollment}", 
        semester = "${classObject.semester}"
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