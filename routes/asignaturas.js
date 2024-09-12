const express = require('express');
const router = express.Router();
const Asignatura = require('../models/Asignatura');

// Ruta para obtener todas las asignaturas
router.get('/', async (req, res) => {
  const asignaturas = await Asignatura.find();
  res.render('asignaturas/index', { asignaturas });
});

// Ruta para agregar una nueva asignatura
router.post('/add', async (req, res) => {
  const { nombre } = req.body;
  const nuevaAsignatura = new Asignatura({ nombre });
  await nuevaAsignatura.save();
  res.redirect('/asignaturas');
});

module.exports = router;
