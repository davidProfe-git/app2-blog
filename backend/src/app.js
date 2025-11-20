const EXPRESS = require('express')
const APP = EXPRESS()
require('dotenv').config()
const PORT = process.env.PORT

//APP.use('/api/recetas', recetasRoutes)

APP.get('/',(request, response)=>{ 
response.json({mensaje : "Funciona la API"})
})

APP.listen(prompt, ()=>{
        console.log(`el servidor esta corriente en el puerto 3000`)
})