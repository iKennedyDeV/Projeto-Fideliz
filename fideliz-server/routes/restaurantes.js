const express = require('express');
const router = express.Router();
const Restaurante = require('../models/Restaurante');

// Listar restaurantes
router.get('/', async (req, res) => {
  const restaurantes = await Restaurante.find();
  res.json(restaurantes);
});

// Adicionar restaurante
router.post('/', async (req, res) => {
  const { nome, logo, endereco, contato } = req.body;
  const novoRestaurante = new Restaurante({ nome, logo, endereco, contato });
  await novoRestaurante.save();
  res.json(novoRestaurante);
});

module.exports = router;
