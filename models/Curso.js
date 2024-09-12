const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cursoSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  alumnos: [{ type: Schema.Types.ObjectId, ref: 'Alumno' }] // Asegúrate de que este campo esté presente
});

module.exports = mongoose.model('Curso', cursoSchema);
