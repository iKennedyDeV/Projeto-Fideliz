const mongoose = require('mongoose');

const RestauranteSchema = new mongoose.Schema({
  nome: String,
  logo: String,
  endereco: String,
  contato: String,
});

module.exports = mongoose.model('Restaurante', RestauranteSchema);

