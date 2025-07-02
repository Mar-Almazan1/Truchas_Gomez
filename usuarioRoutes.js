const express = require('express');
const router = express.Router();

const usuarios = []; // Arreglo para simular base de datos

router.get('/', (req, res) => {
  res.json(usuarios);
});

router.post('/', (req, res) => {
  usuarios.push(req.body);
  res.json({ mensaje: 'Usuario simulado creado' });
});

module.exports = router;
