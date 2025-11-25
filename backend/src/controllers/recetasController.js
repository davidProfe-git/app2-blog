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

}

module.exports = RecetasController