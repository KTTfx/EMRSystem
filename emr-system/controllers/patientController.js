// controllers/patientController.js
const Patient = require('../models/patient');

module.exports = {
  registerPatient: async (req, res) => {
    try {
      const newPatient = await Patient.create(req.body);
      res.status(201).json(newPatient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
