/**
 * This holds the queries for registrations
 */

const db = require('./db');
const classes = require('./classes');

async function getRegistrations() {
    const registrations = await db.query(
        `SELECT * FROM Registrations`
    );

    return registrations;
}

async function createRegistration(registrationObject) {
    const dateNow = (new Date(Date.now()));
    const semester = await getSemester(registrationObject.class_id);
    const updateStatus = await db.query(
        `INSERT INTO Registrations (student_id, class_id, date_time_of_registration, semester)
        VALUES("${registrationObject.student_id}", 
        "${registrationObject.class_id}",
        "${dateNow.toISOString().slice(0, 10)}", 
        "${semester}");`
    );
    return updateStatus;
}

async function deleteRegistration(registrationId) {
    const updateStatus = await db.query(
        `DELETE FROM Registrations WHERE registration_id = "${registrationId}";`
    );
    return updateStatus;
}

const getSemester = async (class_id) => {
    const returnedClass = await classes.getClassById(class_id);
    return returnedClass[0].semester;
}

module.exports = {
    getRegistrations,
    createRegistration,
    deleteRegistration
}