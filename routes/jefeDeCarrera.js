const express = require('express');
const router = express.Router();
const JefeDeCarrera = require('../models/JefeDeCarrera');

// Ruta para obtener todos los jefes de carrera
router.get('/', async (req, res) => {
  const jefes = await JefeDeCarrera.find();
  res.render('jefeDeCarrera/index', { jefes });
});

// Ruta para agregar un nuevo jefe de carrera
router.post('/add', async (req, res) => {
  const { nombre, email, password } = req.body;
  const nuevoJefe = new JefeDeCarrera({ nombre, email, password });
  await nuevoJefe.save();
  res.redirect('/jefeDeCarrera');
});

module.exports = router;
