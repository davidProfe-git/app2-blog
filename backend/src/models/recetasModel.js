const DB = require('../config/database')

class RecetaModel{

    //Read de nuestro CRUD

    static async obtenerRecetas(){
        try{
                //lo que va a hacer
        const [rows] = await DB.query('select * from recetas ')
        return rows
        }catch(error){
                //que hago con el error
                throw error
        }
    }

    static async obtenerPorId(id){
        try{
            const [row] = await DB.query('select * from recetas where id_receta=?',[id]) 
            return row 
        } catch(error){
            throw error
        } 
    }

    async crearReceta(data){
    try{
        const {titulo, descripcion, tiempo_preparacion} = data
        const [row] = await DB.query('insert into recetas(titulo, descripcion, tiempo_preparacion) values (?,?,?)'
        [titulo, descripcion, tiempo_preparacion])
        return rows
    }catch (error){
        throw error;

    }
}
}




module.exports = RecetaModel