const MODEL = require('../models/recetasModel')

class RecetasController{
    //Get /api/recetas - obtiene le listado de recetas
    static async obtenerRecetas(request, response){
        
            const recetas = await MODEL.obtenerRecetas()
            response.json({
                success: true,
                data: recetas
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

}

module.exports = RecetasController