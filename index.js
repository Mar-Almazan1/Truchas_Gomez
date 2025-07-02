const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(express.json());

// Rutas
const menuRoutes = require('./routes/menuRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const reservacionRoutes = require('./routes/reservacionRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

app.use('/menu', menuRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/reservaciones', reservacionRoutes);
app.use('/usuarios', usuarioRoutes);


app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});
