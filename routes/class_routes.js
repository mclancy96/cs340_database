/**
 * For routes regarding classes. Assigned to Mike
 */
const express = require('express');
const router = express.Router();
const classes = require('../services/classes');
const professor = require('../services/professors');
const categories = require('../services/categories');
router.use(
    express.urlencoded({
        extended: true,
    })
);

// Read all
router.get('/classes', async function (req, res) {
    const classResults = await classes.getClasses();
    const professorResults = await professor.getProfessors();
    const categoryResults = await categories.getCategories();
    res.render("classes/classes", { classes: classResults, professors: professorResults, categories: categoryResults });
});

// Create
router.post('/classes/create', async function (req, res) {
    try {
        await classes.createClass(req.body);
        res.redirect("/classes");
    }
    catch (err) {
        console.log("Error creating class: ", err);
        res.redirect('/classes');
    }
});

// Update
router.post('/classes/:id/edit', async function (req, res) {
    try {
        await classes.updateClass(req.params.id, req.body);
        res.redirect("/classes");
    }
    catch (err) {
        console.log("Error updating class: ", err);
        res.redirect('/classes');
    }
});

// Delete
router.post('/classes/:id/delete', async function (req, res) {
    try {
        await classes.deleteClass(req.params.id);
        res.redirect("/classes");
    }
    catch (err) {
        console.log("Error deleting class: ", err);
        res.redirect('/classes');
    }
});

module.exports = router;