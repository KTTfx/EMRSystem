// routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Route to register a new patient
router.post('/register', patientController.registerPatient);

// Additional routes for patients can be defined here

module.exports = router;
