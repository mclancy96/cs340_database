/**
 * For routes regarding students. Assigned to Mike
 */
const express = require('express');
const router = express.Router();
const students = require('../services/students');
router.use(
    express.urlencoded({
        extended: true,
    })
);

// Read all
router.get('/students', async function (req, res) {
    const studentResults = await students.getStudents();
    res.render("students/students", { students: studentResults });
});

// Create
router.post('/students/create', async function (req, res) {
    try {
        await students.createStudent(req.body);
        res.redirect("/students");
    }
    catch (err) {
        console.log("Error creating student: ", err);
        res.redirect('/students');
    }
});

// Read One
router.get('/students/:id/edit', async function (req, res) {
    const studentResult = await students.getStudentById(req.params.id);
    res.render("students/edit_students", { student: studentResult[0] });
});

// Update
router.post('/students/:id/edit', async function (req, res) {
    try {
        await students.updateStudent(req.params.id, req.body);
        res.redirect("/students");
    }
    catch (err) {
        console.log("Error updating student: ", err);
        res.redirect('/students');
    }
});

// Delete
router.post('/students/:id/delete', async function (req, res) {
    try {
        await students.deleteStudent(req.params.id);
        res.redirect("/students");
    }
    catch (err) {
        console.log("Error deleting student: ", err);
        res.redirect('/students');
    }
});

module.exports = router;