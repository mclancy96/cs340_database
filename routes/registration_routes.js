const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/registrations', function (req, res) {
    res.sendFile(path.join(__dirname, "../views/registrations/registrations.html"));
});

module.exports = router;