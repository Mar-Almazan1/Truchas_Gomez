const mongoose = require('mongoose');

const reservacionSchema = new mongoose.Schema({
  nombre: String,
  fecha: Date,
  cantidadPersonas: Number,
  notas: String
});

module.exports = mongoose.model('Reservacion', reservacionSchema);
