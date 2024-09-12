const express = require('express');
const router = express.Router();
const Profesor = require('../models/Profesor');

// Ruta para obtener todos los profesores
router.get('/', async (req, res) => {
  const profesores = await Profesor.find();
  res.render('profesores/index', { profesores });
});

// Ruta para agregar un nuevo profesor
router.post('/add', async (req, res) => {
  const { nombre, email } = req.body;
  const nuevoProfesor = new Profesor({ nombre, email });
  await nuevoProfesor.save();
  res.redirect('/profesores');
});

module.exports = router;
