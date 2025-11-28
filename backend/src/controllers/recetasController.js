const MODEL = require('../models/recetasModel');

class RecetaController {

    static async obtenerRecetas(req, res) {
        try {
            const recetas = await MODEL.obtenerRecetas();
            res.json({ success: true, data: recetas });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async obtenerPorId(req, res) {
        try {
            const receta = await MODEL.obtenerRecetaPorId(req.params.id);
            if (!receta) return res.status(404).json({ success: false, message: 'Receta no encontrada' });
            res.json({ success: true, data: receta });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async crearReceta(req, res) {
        try {
            const receta = req.body;
            if (!receta.titulo || !receta.ingredientes || !receta.instrucciones || !receta.tiempo_preparacion) {
                return res.status(400).json({ success: false, message: 'Faltan campos obligatorios' });
            }
            const nuevaReceta = await MODEL.crearReceta(receta);
            res.status(201).json({ success: true, data: nuevaReceta });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async actualizarReceta(req, res) {
        try {
            const affectedRows = await MODEL.actualizarReceta(req.params.id, req.body);
            if (affectedRows === 0) return res.status(404).json({ success: false, message: 'Receta no encontrada' });
            res.json({ success: true, message: 'Receta actualizada' });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async eliminarReceta(req, res) {
        try {
            const affectedRows = await MODEL.eliminarReceta(req.params.id);
            if (affectedRows === 0) return res.status(404).json({ success: false, message: 'Receta no encontrada' });
            res.json({ success: true, message: 'Receta eliminada' });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

module.exports = RecetaController;
