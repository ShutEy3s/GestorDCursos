const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carreraSchema = new Schema({
  nombre: { type: String, required: true },
  asignaturas: [{ type: Schema.Types.ObjectId, ref: 'Asignatura' }], // IDs de asignaturas
  profesores: [{ type: Schema.Types.ObjectId, ref: 'Profesor' }] // IDs de profesores
});

module.exports = mongoose.model('Carrera', carreraSchema);
