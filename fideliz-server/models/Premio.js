const mongoose = require('mongoose');

const PremioSchema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  descricao: String,
});

module.exports = mongoose.model('Premio', PremioSchema);
