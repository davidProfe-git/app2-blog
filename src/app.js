//script que levanta el servidor sube un servidor http en el puerto port es el primero 
// que va a buscar en el vavegador
//backend/src/app.js
//importamos express y creamos una aplicacion
//usamos el puerto 3000 para el servidor
const EXPRESS= require('express')   // liberia que vamos a usar
const APP = EXPRESS()
require('dotenv').config() // nos permite usar la variable  de entorno env
const cors = require('cors')
const PORT = process.env.PORT
const RECETASROUTES = require('./routes/recetasRoutes')
APP.use(cors())
// la libreria se encarga de resolver el conflicto de puertos
APP.use('/api/recetas',RECETASROUTES)
//cuando me pregunte esta ruta se haga x accion que es obtener todas las resetas
//recetasRoutes hace referencia a las rutas de recetas
// debe ser igual al nombre de la variable que importa las rutas
//importamos las rutas de recetas



// use la api recetas y una funcion llamada recetasRoutes no existe  en el modulo route 
// cuando llega una peticion http  por la pestaña  me aparece el mesaje funciona la api
APP.get('/',(request, respons) =>{
    respons.json({mensaje: "Funciona la API "})
// este mensaje es el que me esta corriendo en la raiz /
})
//definimos una ruta raiz que responde con un mensaje de bienvenida
//cuando se accede a ella
//usamos app.get para definir la ruta y enviar la respuesta
//usamos res.send para enviar el mensaje de respuesta
//la ruta raiz es '/'
//definimos la ruta raiz
//usamos app.get para definir la ruta y enviar la respuesta 
//usamos req y res como parametros de la funcion
//hacemos que la aplicacion escuche en el puerto definido
//y mostramos un mensaje en la consola cuando el servidor
//este corriendo

APP.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
   // le deje un mensaje en la consola para saber que el servidor esta corriendo 
})