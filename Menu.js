const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  nombre: String,
  categoria: String,
  precio: Number,
  descripcion: String
});

module.exports = mongoose.model('Menu', menuSchema);
