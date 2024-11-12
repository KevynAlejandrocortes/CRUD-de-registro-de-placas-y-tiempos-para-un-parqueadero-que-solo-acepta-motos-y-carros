const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController');

// Ruta para obtener los cupos disponibles
router.get('/cupos', registroController.obtenerCupos);

// Otras rutas CRUD para los registros
router.post('/', registroController.agregarRegistro);
router.get('/', registroController.obtenerRegistros);
router.get('/:id', registroController.obtenerRegistro);
router.put('/:id', registroController.actualizarRegistro);
router.delete('/:id', registroController.eliminarRegistro);

module.exports = router;
