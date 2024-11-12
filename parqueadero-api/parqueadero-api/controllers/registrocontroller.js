// registroController.js
const Registro = require('../models/registro'); // Asegúrate de que el modelo esté importado correctamente

// Función para obtener los cupos disponibles
const obtenerCupos = async (req, res) => {
  try {
    const countCarros = await Registro.countDocuments({ tipo: 'carro', horaSalida: null });
    const countMotos = await Registro.countDocuments({ tipo: 'moto', horaSalida: null });

    const cuposDisponibles = {
      carros: 5 - countCarros,
      motos: 10 - countMotos,
    };

    res.json(cuposDisponibles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los cupos' });
  }
};

// Función para agregar un nuevo registro de vehículo
const agregarRegistro = async (req, res) => {
  try {
    const { placa, tipo, horaEntrada } = req.body;

    // Verificar si hay cupo disponible para el tipo de vehículo
    const count = await Registro.countDocuments({ tipo, horaSalida: null });
    const maxCupos = tipo === 'carro' ? 5 : 10;

    if (count >= maxCupos) {
      return res.status(400).json({ error: `No hay cupos disponibles para ${tipo}s` });
    }

    const nuevoRegistro = new Registro({ placa, tipo, horaEntrada });
    await nuevoRegistro.save();

    res.status(201).json(nuevoRegistro);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar registro' });
  }
};

// Función para obtener todos los registros
const obtenerRegistros = async (req, res) => {
  try {
    const registros = await Registro.find();
    res.json(registros);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los registros' });
  }
};

// Función para obtener un registro específico por ID
const obtenerRegistro = async (req, res) => {
  try {
    const registro = await Registro.findById(req.params.id);
    if (!registro) return res.status(404).json({ error: 'Registro no encontrado' });
    res.json(registro);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el registro' });
  }
};

// Función para actualizar un registro específico por ID
const actualizarRegistro = async (req, res) => {
  try {
    const registro = await Registro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!registro) return res.status(404).json({ error: 'Registro no encontrado' });
    res.json(registro);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el registro' });
  }
};

// Función para eliminar un registro específico por ID
const eliminarRegistro = async (req, res) => {
  try {
    const registro = await Registro.findByIdAndDelete(req.params.id);
    if (!registro) return res.status(404).json({ error: 'Registro no encontrado' });
    res.json({ mensaje: 'Registro eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el registro' });
  }
};

module.exports = {
  obtenerCupos,
  agregarRegistro,
  obtenerRegistros,
  obtenerRegistro,
  actualizarRegistro,
  eliminarRegistro,
};
