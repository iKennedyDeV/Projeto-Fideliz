const express = require('express');
const router = express.Router();
const Restaurante = require('../models/Restaurante');

// Rota de login e registro
router.post('/login', async (req, res) => {
  // Implementar lógica de login
});

router.post('/register', async (req, res) => {
  // Implementar lógica de registro
});

module.exports = router;
