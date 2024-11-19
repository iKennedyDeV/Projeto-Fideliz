const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nome: String,
  contato: String,
  endereco: String,
  codigo: { type: String, unique: true },
  pontos: { type: Number, default: 0 },
});

module.exports = mongoose.model('Cliente', ClienteSchema);
