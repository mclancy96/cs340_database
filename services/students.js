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

async function getStudentById(studentId) {
    const student = await db.query(
        `SELECT * FROM Students WHERE student_id = ${studentId}`
    );
    return student;
}

async function createStudent(studentObject) {
    const updateStatus = await db.query(
        `INSERT INTO Students (name, street_address, city, state, zip_code, email, phone_number)
        VALUES("${studentObject.name}", 
        "${studentObject.street_address}",
        "${studentObject.city}", 
        "${studentObject.state}", 
        "${studentObject.zip_code}", 
        "${studentObject.email}", 
        "${studentObject.phone_number}");`
    );
    return updateStatus;
}

async function updateStudent(studentId, studentObject) {
    const updateStatus = await db.query(
        `UPDATE Students
        SET name = "${studentObject.name}", 
        street_address= "${studentObject.street_address}",
        city="${studentObject.city}", 
        state="${studentObject.state}", 
        zip_code = "${studentObject.zip_code}", 
        email = "${studentObject.email}", 
        phone_number= "${studentObject.phone_number}"
        WHERE student_id = "${studentId}";`
    );
    return updateStatus;
}

async function deleteStudent(studentId) {

    // obtain all the classes that the student is registered for
    const registeredClasses = await db.query(
        `SELECT class_id FROM Registrations WHERE student_id = "${studentId}";`
    );

    // as long as a student is registered for a class, loop through all the classes and decrement class_enrollment by 1
    if (registeredClasses.length !== 0) {
        for (class_obj of registeredClasses) {
            const cur_enrollment_now = await db.query(
                `SELECT current_enrollment FROM Classes WHERE class_id = ${class_obj.class_id};`
            );
            const cur_enrollment_now_num = cur_enrollment_now[0].current_enrollment

            await db.query(`
                UPDATE Classes
                SET current_enrollment = ${cur_enrollment_now_num - 1}
                WHERE class_id = ${class_obj.class_id}`);
        }
    }

    const updateStatus = await db.query(
        `DELETE FROM Students WHERE student_id = "${studentId}";`
    );
    
    return updateStatus;
}

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}