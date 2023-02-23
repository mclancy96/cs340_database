const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/class_categories', function (req, res) {
    res.sendFile(path.join(__dirname, "../views/class_categories/class_category.html"));
});

router.get('/class_categories/edit', function (req, res) {
    res.sendFile(path.join(__dirname, "../views/class_categories/edit_category.html"));
});

module.exports = router;