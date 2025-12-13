const MODEL = require('../models/RecetaModel');

class RecetaControllers {

static async obtenerRecetas(req, res) {
    try {
        const recetas = await MODEL.obtenerRecetas();
        res.json({
            success: true,
            data: recetas
        });
    } catch (error) {
        console.error("ERROR MYSQL:", error);  

        res.status(500).json({
            success: false,
            message: "Error obteniendo recetas",
            error: error.message || error
        });
    }
}

    static async obtenerPorId(req, res) {
        try {
            const { id } = req.params;
            const receta = await MODEL.obtenerRecetaPorId(id);

            res.json({
                success: true,
                data: receta
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error obteniendo receta por ID",
                error: error.message
            });
        }
    }
}

module.exports = RecetaControllers;