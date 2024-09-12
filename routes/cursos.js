const express = require('express');
const router = express.Router();
const Carrera = require('../models/Carrera'); // Asegúrate de que la ruta sea correcta

// Ruta para manejar la solicitud POST a /carreras/add
router.post('/add', async (req, res) => {
  try {
    // Crear una nueva carrera con los datos enviados en la solicitud
    const nuevaCarrera = new Carrera({
      nombre: req.body.nombre,
      asignaturas: req.body.asignaturas.split(',').map(id => id.trim()), // Procesar IDs de asignaturas
      profesores: req.body.profesores.split(',').map(id => id.trim()) // Procesar IDs de profesores
    });

    // Guardar la nueva carrera en la base de datos
    await nuevaCarrera.save();
    res.redirect('/carreras'); // Redirigir a la página de carreras después de guardar
  } catch (error) {
    console.error("Error al agregar la carrera:", error);
    res.status(500).send("Error al agregar la carrera");
  }
});

module.exports = router;
