/**
 * For routes regarding professors. Assigned to Chris
 */
const express = require('express');
const router = express.Router();
const categories = require('../services/categories');
router.use(
    express.urlencoded({
        extended: true,
    })
);

// Read all
router.get('/class_categories', async function (req, res) {
    const categoriesResults = await categories.getCategories();
    res.render("class_categories/class_category", {categories: categoriesResults});
});

// Create
router.post('/class_categories/create', async function (req, res) {
    try {
        await categories.createCategory(req.body);
        res.redirect("/class_categories");
    }
    catch (err) {
        console.log("Error creating class category: ", err);
        res.redirect('/class_categories');
    }
});

// Read One
router.get('/class_categories/:id/edit', async function (req, res) {
    const categoryResult = await categories.getCategoryById(req.params.id);
    res.render("class_categories/edit_category", { category: categoryResult[0]});
});

// Update
router.post('/class_categories/:id/edit', async function (req, res) {
    try {
        await categories.updateCategory(req.params.id, req.body);
        res.redirect("/class_categories");
    }
    catch (err) {
        console.log("Error updating class category: ", err);
        res.redirect('/class_categories');
    }
});

// Delete
router.post('/class_categories/:id/delete', async function (req, res) {
    try {
        await categories.deleteCategory(req.params.id);
        res.redirect("/class_categories");
    }
    catch (err) {
        console.log("Error deleting class category: ", err);
        res.redirect('/class_categories');
    }
});


module.exports = router;