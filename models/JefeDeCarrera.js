const mongoose = require('mongoose');

const jefeDeCarreraSchema = new mongoose.Schema({
  nombre: String,
  email: { type: String, unique: true },
  password: String
});

module.exports = mongoose.model('JefeDeCarrera', jefeDeCarreraSchema);
