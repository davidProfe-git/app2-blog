// segundo paso despues de la base de datos
const EXPRESS= require('express')
const ROUTER = EXPRESS.Router()
const CONTROLER = require ('../controllers/recetasController')
// todo lo que llamo que este en otro script tengo que hacer un require



//mis rutas de la api
ROUTER.get('/', CONTROLER.obtenerRecetas)
//si quiero agregar una subruta
ROUTER.get('/:id', CONTROLER.obtenerPorId)
//despues del controller agrego una ruta
//se le pone la ruta id para que la capture
// se le pone el metodo y 


// aqui se va acolocar la tuta definida api/recetas y
// va a poner las rutas que le ponnga por ejemplo apis/recetas/
// aqui le debo definir la funcion a la que hace referencia
// cuando me llegue una peticion get a  la ruta api/recetas traigame todo
module.exports = ROUTER
// exporto las rutas para poder usarlas en otro lado