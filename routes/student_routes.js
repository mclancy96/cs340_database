const express = require('express');
const router = express.Router();
const path = require('path');
// const students = require('../services/students');


router.get('/students', async function (req, res) {
    // let studentResults = await students.getStudents();
    res.sendFile(path.join(__dirname, "../views/students/students.html"));
});

router.get('/students/edit', function (req, res) {
    res.sendFile(path.join(__dirname, "../views/students/edit_students.html"));
});

module.exports = router;