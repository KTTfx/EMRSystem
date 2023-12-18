// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());

// Routes
app.use('/patients', require('./routes/patientRoutes'));
app.use('/encounters', require('./routes/encounterRoutes'));
app.use('/doctors', require('./routes/doctorRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
