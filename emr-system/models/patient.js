// models/patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientID: { type: String, required: true, unique: true },
  surname: String,
  otherNames: String,
  gender: String,
  phoneNumber: String,
  residentialAddress: String,
  emergencyContact: {
    name: String,
    phone: String,
    relationship: String,
  },
});

module.exports = mongoose.model('Patient', patientSchema);
