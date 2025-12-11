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

  static async crearReceta(request, response){
    try{
        const {titulo, descripcion, tiempo_preparacion} = request.body

        if(!titulo || !descripcion || !tiempo_preparacion){
            return response.status(400).json({
                success: false,
                message: 'faltan datos obligatorio'
            })
        }else{
                const nuevaReceta = await MODEL.crearReceta(request.body)
                response.status(201).json({
                    success: true,
                    message: 'Receta creada exitosamente',
                    data: nuevaReceta
                })
            }
    }catch(error){
        return error;
    }


  }
}

module.exports = RecetasController 