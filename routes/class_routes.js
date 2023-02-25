/**
 * For routes regarding classes. Assigned to Mike
 */
const express = require('express');
const router = express.Router();
const classes = require('../services/classes');
router.use(
    express.urlencoded({
        extended: true,
    })
);

router.get('/classes', function (req, res) {
    res.render("classes/classes");
});

router.get('/classes/edit', function (req, res) {
    res.render("classes/edit_classes");
});

module.exports = router;