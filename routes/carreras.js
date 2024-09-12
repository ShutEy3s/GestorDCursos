const express = require('express');
const router = express.Router();

// Importa el modelo Carrera
const Carrera = require('../models/Carrera');

// Define la ruta POST para /carreras/add
router.post('/add', async (req, res) => {
  try {
    // Imprime los datos recibidos
    console.log('Datos recibidos:', req.body);

    const { asignaturas, profesores } = req.body;

    // Conversión a ObjectId
    const asignaturasIds = asignaturas.map(id => mongoose.Types.ObjectId(id));
    const profesoresIds = profesores.map(id => mongoose.Types.ObjectId(id));

    // Crea una nueva instancia de Carrera
    const carrera = new Carrera({
      asignaturas: asignaturasIds,
      profesores: profesoresIds,
      // Otros campos
    });

    // Guarda la carrera en la base de datos
    await carrera.save();
    res.status(201).send(carrera);
  } catch (error) {
    // Registra el error
    console.error('Error al guardar carrera:', error);
    res.status(400).send(error);
  }
});

module.exports = router;
