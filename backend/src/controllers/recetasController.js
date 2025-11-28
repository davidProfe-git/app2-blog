const { request } = require('express');
const MODEL = require('../models/RecetaModel');

class RecetaControllers {
    // Get /api/recetas - obtiene el listado de recetas
    static async obtenerRecetas( ) {
        
        const recetas = await MODEL.obtenerRecetas(Request, Response)
        Response.json({
            success: true,
            data: recetas
        })


    }
    static async obtenerPorId(Request, Response){
        try{
            const id = request.params
            const receta = await MODEL.obtenerPorId(id)
            Response.json({
                success: true,
                data: receta
            })
            
        }catch(error){
            return error;

        } 
    }

}

module.exports = RecetaControllers