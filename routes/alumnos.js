const express = require('express');
const router = express.Router();
const Alumno = require('../models/Alumno');

// Ruta para obtener todos los alumnos
router.get('/', async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    res.render('alumnos/index', { alumnos });
  } catch (error) {
    console.error('Error al obtener alumnos:', error);
    res.status(500).send('Error en el servidor');
  }
});

// Ruta para agregar un nuevo alumno
router.get('/add', (req, res) => {
  res.render('alumnos/add');
});

router.post('/add', async (req, res) => {
  try {
    const { nombre, edad, correo } = req.body;
    const nuevoAlumno = new Alumno({ nombre, edad, correo });
    await nuevoAlumno.save();
    res.redirect('/alumnos');
  } catch (error) {
    console.error('Error al agregar alumno:', error);
    res.status(500).send('Error en el servidor');
  }
});

module.exports = router;
