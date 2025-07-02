const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  cliente: String,
  platillos: [String],
  total: Number,
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pedido', pedidoSchema);
