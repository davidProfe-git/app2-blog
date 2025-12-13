const DB = require('../config/database')

class RecetaModel{

   //Read de nuestro CRUD
   static async obtenerRecetas(){
<<<<<<< HEAD
        try {
            const [rows] = await DB.query('SELECT * FROM recetas')
            return rows
        } catch (error) {
            throw error
        }
   } 
 //para ver el detalle de la receta, se obtiene por id
   static async obtenerPorId(id){
        try {
            const [row] = await DB.query('SELECT * FROM recetas WHERE id= ? ',[id])
            return row
        } catch (error) {
            throw error
        }    

   }

   static async crearReceta(data){
        try {
            const {titulo, ingredientes, instrucciones, tiempo_preparacion} = data
            const [rows] = await DB.query('INSERT INTO recetas (titulo, ingredientes, instrucciones, tiempo_preparacion) VALUES (?,?,?,?)',
            [titulo, ingredientes, instrucciones, tiempo_preparacion])
            return rows
        } catch (error) {
            throw error
        }
    }
=======
    try {
        const [rows] = await DB.query('SELECT * FROM recetas')
        return rows
    } catch (error) {
        throw error
    }







   } 

>>>>>>> origin/alexander
}

module.exports = RecetaModel