/**
 * For routes regarding registrations. Assigned to Mike
 */
const express = require('express');
const router = express.Router();
const registrations = require('../services/registrations');
const students = require('../services/students');
const classes = require('../services/classes');
router.use(
    express.urlencoded({
        extended: true,
    })
);

// Read all
router.get('/registrations', async function (req, res) {
    const registrationResults = await registrations.getRegistrations();
    const studentResults = await students.getStudents();
    const classResults = await classes.getClasses();
    res.render("registrations/registrations", { registrations: registrationResults, students: studentResults, classes: classResults });
});

// Create
router.post('/registrations/create', async function (req, res) {
    try {
        await registrations.createRegistration(req.body);
        res.redirect("/registrations");
    }
    catch (err) {
        console.log("Error creating registration: ", err);
        res.redirect('/registrations');
    }
});

// Delete
router.post('/registrations/:id/delete', async function (req, res) {
    try {
        await registrations.deleteRegistration(req.params.id);
        res.redirect("/registrations");
    }
    catch (err) {
        console.log("Error deleting registration: ", err);
        res.redirect('/registrations');
    }
});
module.exports = router;