// routes/encounterRoutes.js
const express = require('express');
const router = express.Router();
const encounterController = require('../controllers/encounterController');

// Route to start a new encounter for a patient
router.post('/start', encounterController.startEncounter);

// Additional routes for encounters can be defined here

module.exports = router;
