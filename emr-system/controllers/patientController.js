// controllers/patientController.js
const Patient = require('../models/patient');

module.exports = {
  registerPatient: async (req, res) => {
    try {
      
      const {
        patientID,
        surname,
        otherNames,
        gender,
        phoneNumber,
        residentialAddress,
        emergencyContact,
      } = req.body;

    
      const newPatient = await Patient.create({
        patientID,
        surname,
        otherNames,
        gender,
        phoneNumber,
        residentialAddress,
        emergencyContact,
      });

    
      res.status(201).json(newPatient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  
};
