const EXPRESS = require('express')
const APP = EXPRESS()
require('dotenv').config()
const PORT = process.env.PORT
const RECETASROUTES = require('./routes/recetasRoutes')
APP.use('/api/recetas',RECETASROUTES)

APP.get('/',(request, response) =>{
    response.json({mensaje : "Funciona la API"})
})


APP.listen(PORT, ()=>{
    console.log(`el servidor esta corriendo en el puerto ${PORT}`)

})