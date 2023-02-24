/**
 * For routes regarding registrations. Assigned to Mike
 */
const express = require('express');
const router = express.Router();

router.get('/registrations', function (req, res) {
    res.render("registrations/registrations");
});

module.exports = router;