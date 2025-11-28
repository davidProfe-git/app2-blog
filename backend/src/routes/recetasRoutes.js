const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()
const CONTROLLER = require('../controllers/recetasController')

//mis rutas de la api
ROUTER.get('/',CONTROLLER.obtenerRecetas)

module.exports = ROUTER