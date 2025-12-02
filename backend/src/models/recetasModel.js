const DB = require('../config/database')

class RecetaModel{

   //Read de nuestro CRUD
   static async obtenerRecetas(){
        try {
            const [rows] = await DB.query('SELECT * FROM recetas')
            return rows
        } catch (error) {
            throw error
        }
   } 
 
   static async obtenerPorId(id){
        try {
            const [row] = await DB.query('SELECT * FROM recetas WHERE id= ? ',[id])
            return row
        } catch (error) {
            throw error
        }    

   }


}

module.exports = RecetaModel