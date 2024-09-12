const mongoose = require('mongoose');

const asignaturaSchema = new mongoose.Schema({
  nombre: String
});

module.exports = mongoose.model('Asignatura', asignaturaSchema);
