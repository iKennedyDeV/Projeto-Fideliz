const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');

// Listar clientes
router.get('/', async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
});

// Cadastrar cliente
router.post('/', async (req, res) => {
  const { nome, contato, endereco } = req.body;
  const codigo = Math.random().toString(36).substring(2, 15); // Geração de código aleatório
  const novoCliente = new Cliente({ nome, contato, endereco, codigo });
  await novoCliente.save();
  res.json(novoCliente);
});

// Detalhes do cliente
router.get('/:id', async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  res.json(cliente);
});

module.exports = router;
