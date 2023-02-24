/**
 * For routes regarding classes. Assigned to Mike
 */
const express = require('express');
const router = express.Router();

router.get('/classes', function (req, res) {
    res.render("classes/classes");
});

router.get('/classes/edit', function (req, res) {
    res.render("classes/edit_classes");
});

module.exports = router;