const MODEL = require('../models/recetasModel')

class RecetasController{
    //Get /api/recetas - obtiene le listado de recetas
    static async obtenerRecetas(request, response){
        
            const recetas = await MODEL.obtenerRecetas()
            response.json({
                success: true,
                data: recetas
<<<<<<< HEAD
            }) 
    }

    static async obtenerPorId(request, response){
        try{
            const {id} = request.params
            const receta = await MODEL.obtenerPorId(id)

            response.json({
                success: true,
                data: receta
            })
        }catch(error){
            return error;
        }

    }

    static async crearReceta(request, response){
        try {
            
            const {titulo, ingredientes, instrucciones, tiempo_preparacion} = request.body

            if(!titulo || !ingredientes || !instrucciones || !tiempo_preparacion){
                return response.status(400).json({
                    success: false,
                    message: 'Faltan datos obligatorios'
                })
            }else{
                    const nuevaReceta = await MODEL.crearReceta(request.body)
                    response.status(201).json({
                        success: true,
                        message: 'Receta creada exitosamente',
                        data: nuevaReceta
                    })
                }
        } catch (error) {
            return error;



          
        }
=======
            })

        
>>>>>>> origin/alexander
    }

}

<<<<<<< HEAD
=======

>>>>>>> origin/alexander
module.exports = RecetasController