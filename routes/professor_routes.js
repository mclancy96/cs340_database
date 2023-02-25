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

router.get('/professors', function (req, res) {
    res.render("professors/professors");
});

router.get('/professors/edit', function (req, res) {
    res.render("professors/edit_professors");
});

module.exports = router;