const express = require('express');
const router = express.Router();
const RecetaController = require('../controllers/recetasController');

router.get('/', RecetaController.obtenerRecetas);
router.get('/:id', RecetaController.obtenerPorId);
router.post('/', RecetaController.crearReceta);
router.put('/:id', RecetaController.actualizarReceta);
router.delete('/:id', RecetaController.eliminarReceta);

module.exports = router;

