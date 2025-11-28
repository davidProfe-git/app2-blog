const DB = require('../config/database');

class RecetaModel {

    // Obtener todas las recetas
    static async obtenerRecetas() {
        try {
            const [rows] = await DB.query('SELECT * FROM recetas');
            return rows;
        } catch (error) {
            throw error;
        }
    }

    // Obtener receta por ID
    static async obtenerPorId(id) {
        try {
            const [rows] = await DB.query('SELECT * FROM recetas WHERE id = ?', [id]);
            return rows[0]; // devuelve solo la primera receta encontrada
        } catch (error) {
            throw error;
        }
    }

}

module.exports = RecetaModel;

