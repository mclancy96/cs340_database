const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/professors', function (req, res) {
    res.sendFile(path.join(__dirname, "../views/professors/professors.html"));
});

router.get('/professors/edit', function (req, res) {
    res.sendFile(path.join(__dirname, "../views/professors/edit_professors.html"));
});

module.exports = router;