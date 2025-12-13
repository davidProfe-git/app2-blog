const DB = require('../config/database')

class RecetaModel {

    static async obtenerRecetas() {
        try {
            const [rows] = await DB.query('SELECT * FROM Receta');
            return rows;
        } catch (error) {
            throw error;
        }
    }

    static async obtenerRecetaPorId(id) {
        try {
            const [rows] = await DB.query(
                'SELECT * FROM Receta WHERE id_Receta = ?', 
                [id]
            );
            return rows[0];
        } catch (error) {
            throw error;
        }
    }

}

module.exports = RecetaModel;
