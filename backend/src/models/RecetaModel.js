const DB = require('../config/database')

class RecetaModel{

   //Read de nuestro CRUD
    static async obtenerRecetas(){
        try {
            const [rows] = await DB.query('SELECT * FROM Recetas')
            return rows
        } catch (error) {
            throw error
        }
    } 

    static async obtenerRecetaPorId(id){
        try {
            const [rows] = await DB.query('select * from Recetas where id = ?', [id])
            return error;
        }catch (error) {
            throw error
            }
    }

}

module.exports = RecetaModel