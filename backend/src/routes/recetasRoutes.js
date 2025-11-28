const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()
const CONTROLLER = require('../controllers/recetasController');

//mis rutas de la api
ROUTER.get('/',CONTROLLER.obtenerRecetas)
ROUTER.get('/:id', CONTROLLER.obtenerPorId)

module.exports = ROUTER