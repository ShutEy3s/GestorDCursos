const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Configuración de la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/sistema_estudiantes')
  .then(() => {
    console.log("Conectado a MongoDB correctamente");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB:", err);
  });

// Configurar el motor de plantillas EJS para las vistas
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rutas
const alumnoRoutes = require('./routes/alumnos');
const cursoRoutes = require('./routes/cursos');
const jefeDeCarreraRoutes = require('./routes/jefeDeCarrera');
const asignaturasRoutes = require('./routes/asignaturas');
const profesoresRoutes = require('./routes/profesores');
const carrerasRoutes = require('./routes/carreras');

// Usar las rutas
app.use('/alumnos', alumnoRoutes);
app.use('/cursos', cursoRoutes);
app.use('/jefeDeCarrera', jefeDeCarreraRoutes);
app.use('/asignaturas', asignaturasRoutes);
app.use('/profesores', profesoresRoutes);
app.use('/carreras', carrerasRoutes); 

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
