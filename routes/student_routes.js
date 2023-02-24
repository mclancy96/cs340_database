/**
 * For routes regarding students. Assigned to Mike
 */
const express = require('express');
const router = express.Router();
const students = require('../services/students');

router.get('/students', async function (req, res) {
    let studentResults = await students.getStudents();
    res.render("students/students");
});

router.get('/students/:id/edit', function (req, res) {
    res.render("students/edit_students");
});


module.exports = router;