const { request } = require('express')
const MODEL = require('../models/recetasModel')

class RecetasController{
    //get /api/recetas - obtiene el listado de recetas
    static async obtenerRecetas(request, response){

        try{
            const recetas = await MODEL.obtenerRecetas()
            response.json({
            success: true,
            data: recetas
        })
        }catch(error){
                //que hago con el error
                throw error
        }
    }
  static async obtenerPorId(request, response){
    try {
        const {id} = request.params;
        console.log(id)
        const receta = await MODEL.obtenerPorId(id)
            response.json({
                success: true, 
                data: receta
            })
    }catch (error){
        return error;
    }
  }
}
module.exports = RecetasController 