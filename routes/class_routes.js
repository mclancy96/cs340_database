const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/classes', function (req, res) {
    res.sendFile(path.join(__dirname, "../views/classes/classes.html"));
});

router.get('/classes/edit', function (req, res) {
    res.sendFile(path.join(__dirname, "../views/classes/edit_classes.html"));
});

module.exports = router;