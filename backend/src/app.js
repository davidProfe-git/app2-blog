const EXPRESS = require('express')
const APP = EXPRESS()
require('dotenv').config()
const PORT = process.env.PORT
const recetasRoutes = require('./routes/recetasRoutes')

APP.use('/api/recetas', recetasRoutes)

APP.get('/',(request, response)=>{ 
response.json({mensaje : "Funciona la API"})
})

APP.listen(PORT, ()=>{
        console.log(`el servidor esta corriendo en el puerto 3000`)
})