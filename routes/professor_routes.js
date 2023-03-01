/**
 * For routes regarding professors. Assigned to Chris
 */
const express = require('express');
const router = express.Router();
const professors = require('../services/professors');
router.use(
    express.urlencoded({
        extended: true,
    })
);

// Read all
router.get('/professors', async function (req, res) {
    const professorResults = await professors.getProfessors();
    res.render("professors/professors", { professors: professorResults});
});

// Create
router.post('/professors/create', async function (req, res) {
    try {
        await professors.createProfessor(req.body);
        res.redirect("/professors");
    }
    catch (err) {
        console.log("Error creating professor: ", err);
        res.redirect('/professors');
    }
});


// Read One
router.get('/professors/:id/edit', async function (req, res) {
    const professorResult = await professors.getProfessorById(req.params.id);
    res.render("professors/edit_professors", { professor: professorResult[0]});
});

// Update
router.post('/professors/:id/edit', async function (req, res) {
    try {
        await professors.updateProfessor(req.params.id, req.body);
        res.redirect("/professors");
    }
    catch (err) {
        console.log("Error updating professor: ", err);
        res.redirect('/professors');
    }
});


// Delete
router.post('/professors/:id/delete', async function (req, res) {
    try {
        await professors.deleteProfessor(req.params.id);
        res.redirect("/professors");
    }
    catch (err) {
        console.log("Error deleting professors: ", err);
        res.redirect('/professors');
    }
});

module.exports = router;