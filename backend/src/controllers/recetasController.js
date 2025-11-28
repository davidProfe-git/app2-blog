const MODEL = require('../models/recetasModel')

class RecetasController {
    // GET /api/recetas - obtiene el listado de recetas
    static async obtenerRecetas(request, response) {
        try {
            const recetas = await MODEL.obtenerRecetas();
            response.json({
                success: true,
                data: recetas
            });
        } catch (error) {
            response.status(500).json({
                success: false,
                error: error.message
            });
        }
    }
}

module.exports = RecetasController;
