// controllers/encounterController.js
const Encounter = require('../models/encounter');

module.exports = {
  startEncounter: async (req, res) => {
    try {
      // Extract encounter information from the request body
      const { patientID, type, vitals } = req.body;

      // Create a new encounter record in the database
      const newEncounter = await Encounter.create({
        patientID,
        type,
        vitals,
      });

      // Respond with the newly created encounter data
      res.status(201).json(newEncounter);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },


};
