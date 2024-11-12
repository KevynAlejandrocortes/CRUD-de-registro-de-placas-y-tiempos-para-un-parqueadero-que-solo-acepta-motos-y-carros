const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
  placa: { type: String, required: true, unique: true },
  tipo: { type: String, enum: ['carro', 'moto'], required: true },
  horaEntrada: { type: Date, required: true, default: Date.now },
  horaSalida: { type: Date },
});

module.exports = mongoose.model('Registro', registroSchema);
