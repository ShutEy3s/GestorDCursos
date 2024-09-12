const mongoose = require('mongoose');

const profesorSchema = new mongoose.Schema({
  nombre: String,
  email: { type: String, unique: true }
});

module.exports = mongoose.model('Profesor', profesorSchema);
