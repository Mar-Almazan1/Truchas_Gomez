const express = require('express');
const router = express.Router();

const pedidos = []; // Arreglo para simular base de datos

router.get('/', (req, res) => {
  res.json(pedidos);
});

router.post('/', (req, res) => {
  pedidos.push(req.body);
  res.json({ mensaje: 'Pedido simulado recibido' });
});

module.exports = router;
