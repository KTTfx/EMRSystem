// models/encounter.js
const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientID: { type: String, required: true },
  dateTime: { type: Date, default: Date.now },
  type: { type: String, enum: ['Emergency', 'OPD', 'Specialist Care'] },
  vitals: {
    bloodPressure: String,
    temperature: String,
    pulse: String,
    spo2: String,
  },
});

module.exports = mongoose.model('Encounter', encounterSchema);
