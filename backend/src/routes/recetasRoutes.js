const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()
const CONTROLLER = require('../controllers/recetasController')

//mis rutas de la api
ROUTER.get('/',CONTROLLER.obtenerRecetas)
<<<<<<< HEAD
ROUTER.get('/:id',CONTROLLER.obtenerPorId)
ROUTER.post('/',CONTROLLER.crearReceta)
=======
>>>>>>> origin/alexander

module.exports = ROUTER