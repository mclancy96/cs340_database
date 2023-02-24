/**
 * For routes regarding professors. Assigned to Chris
 */
const express = require('express');
const router = express.Router();

router.get('/class_categories', function (req, res) {
    res.render("class_categories/class_category");
});

router.get('/class_categories/edit', function (req, res) {
    res.render("class_categories/edit_category");
});

module.exports = router;