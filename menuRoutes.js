const express = require('express');
const router = express.Router();

// Simulación de datos sin base de datos
const menuSimulado = [
  { nombre: "Trucha a la mexicana", categoria: "truchas", precio: 150, descripcion: "Preparada con salsa picante y verduras." },
  { nombre: "Corte de res", categoria: "carnes", precio: 200, descripcion: "Corte suave a la parrilla." }
];

router.get('/', (req, res) => {
  res.json(menuSimulado);
});

router.post('/', (req, res) => {
  res.json({ mensaje: 'Platillo simulado agregado (no guardado)' });
});

module.exports = router;
