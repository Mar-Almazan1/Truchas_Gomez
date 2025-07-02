const express = require('express');
const router = express.Router();

const reservaciones = []; // Arreglo para simular base de datos

router.get('/', (req, res) => {
  res.json(reservaciones);
});

router.post('/', (req, res) => {
  reservaciones.push(req.body);
  res.json({ mensaje: 'Reservación simulada registrada' });
});

module.exports = router;
