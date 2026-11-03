const Plato = require('../models/Plato')

// GET /platos → listar todos
const listar = async (req, res) => {
  try {
    const platos = await Plato.find()
    res.json(platos)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

// GET /platos/:id → obtener uno
const obtener = async (req, res) => {
  try {
    const plato = await Plato.findById(req.params.id)
    if (!plato) return res.status(404).json({ error: 'Plato no encontrado' })
    res.json(plato)
  } catch (e) {
    res.status(400).json({ error: 'ID inválido' })
  }
}

// POST /platos → alta
const crear = async (req, res) => {
  try {
    const plato = await Plato.create(req.body)
    res.status(201).json(plato)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}

// PUT /platos/:id → modificación
const actualizar = async (req, res) => {
  try {
    const plato = await Plato.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!plato) return res.status(404).json({ error: 'Plato no encontrado' })
    res.json(plato)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}

// DELETE /platos/:id → baja
const eliminar = async (req, res) => {
  try {
    const plato = await Plato.findByIdAndDelete(req.params.id)
    if (!plato) return res.status(404).json({ error: 'Plato no encontrado' })
    res.json({ mensaje: 'Plato eliminado', plato })
  } catch (e) {
    res.status(400).json({ error: 'ID inválido' })
  }
}

module.exports = { listar, obtener, crear, actualizar, eliminar }