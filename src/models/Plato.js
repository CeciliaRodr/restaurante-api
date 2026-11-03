const mongoose = require('mongoose')

const platoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true, trim: true },
  // descripcion → String, obligatorio
  // ingredientes → [String]
  // precio → Number, obligatorio, min: 0
  // aptoCeliacos, aptoVeganos, aptoDiabeticos → Boolean, default: false
  // calorias → Number, min: 0
  // imagen → String
}, { timestamps: true })

module.exports = mongoose.model('Plato', platoSchema)