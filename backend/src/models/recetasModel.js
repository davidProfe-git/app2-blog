const DB = require('../config/database'); // tu conexión MySQL

const RecetasModel = {
    obtenerRecetas: async () => {
        const [rows] = await DB.query('SELECT * FROM recetas');
        return rows;
    },

    obtenerRecetaPorId: async (id) => {
        const [rows] = await DB.query('SELECT * FROM recetas WHERE id = ?', [id]);
        return rows[0]; // devuelve un objeto o undefined
    },

    crearReceta: async (receta) => {
        const { titulo, ingredientes, instrucciones, tiempo_preparacion, imagen_url } = receta;
        const [result] = await DB.query(
            'INSERT INTO recetas (titulo, ingredientes, instrucciones, tiempo_preparacion, imagen_url) VALUES (?, ?, ?, ?, ?)',
            [titulo, ingredientes, instrucciones, tiempo_preparacion, imagen_url]
        );
        return { id: result.insertId, ...receta };
    },

    actualizarReceta: async (id, receta) => {
        const { titulo, ingredientes, instrucciones, tiempo_preparacion, imagen_url } = receta;
        const [result] = await DB.query(
            'UPDATE recetas SET titulo=?, ingredientes=?, instrucciones=?, tiempo_preparacion=?, imagen_url=? WHERE id=?',
            [titulo, ingredientes, instrucciones, tiempo_preparacion, imagen_url, id]
        );
        return result.affectedRows;
    },

    eliminarReceta: async (id) => {
        const [result] = await DB.query('DELETE FROM recetas WHERE id=?', [id]);
        return result.affectedRows;
    }
};

module.exports = RecetasModel;








