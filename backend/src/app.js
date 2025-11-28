const EXPRESS = require('express')
const APP = EXPRESS()
require('dotenv').config()
const PORT = process.env.PORT
const RecetaRoutes = require('./routes/RecetaRoutes')

APP.use(EXPRESS.json())

APP.use('/api/Receta', RecetaRoutes)

APP.get('/',(request, response)=>{
    response.json("mensaje : funciona la API")
} )

APP.listen(PORT, ()=>{
    console.log(`El servidor esta corriendo en el pueerto ${PORT}`)
})