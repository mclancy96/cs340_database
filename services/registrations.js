/**
 * This holds the queries for registrations
 */

const db = require('./db');
const classes = require('./classes');

async function getRegistrations() {
    const registrations = await db.query(
        `SELECT * FROM Registrations;`
    );

    return registrations;
}

async function createRegistration(registrationObject) {
    const dateNow = (new Date(Date.now()));
    try {
        const enrollment = await db.query(
            `SELECT current_enrollment, max_enrollment FROM Classes 
        where class_id = ${registrationObject.class_id};`
        );
        const current = enrollment[0].current_enrollment >= 0 ? enrollment[0].current_enrollment : 0;
        const max_enrollment = enrollment[0].max_enrollment;
        if (current < max_enrollment) {
            const updateStatus = await db.query(
                `INSERT INTO Registrations (student_id, class_id, date_time_of_registration, semester)
        VALUES("${registrationObject.student_id}", 
        "${registrationObject.class_id}",
        "${dateNow.toISOString().slice(0, 10)}", 
        "${registrationObject.semester_name}");`
            );
            await db.query(
                `UPDATE Classes
                SET current_enrollment = ${current + 1}
                WHERE class_id = ${registrationObject.class_id}`
            )
            return updateStatus;
        }
        return null;

    } catch (error) {
        return error;
    }

}

async function deleteRegistration(registrationId) {
    try {
        const classResult = await db.query(
            `SELECT class_id FROM Registrations 
    where registration_id = ${registrationId};`
        )
        const class_id = classResult[0].class_id;
        const enrollmentResult = await db.query(
            `SELECT current_enrollment FROM Classes 
    where class_id = ${class_id};`
        )
        const current = enrollmentResult[0].current_enrollment >= 1 ? enrollmentResult[0].current_enrollment : 1;
        const updateStatus = await db.query(
            `DELETE FROM Registrations WHERE registration_id = "${registrationId}";`
        );
        await db.query(
            `UPDATE Classes
        SET current_enrollment = ${current - 1}
        WHERE class_id = ${class_id}`
        )
        return updateStatus;
    } catch (error) {
        return error
    }

}

module.exports = {
    getRegistrations,
    createRegistration,
    deleteRegistration
}