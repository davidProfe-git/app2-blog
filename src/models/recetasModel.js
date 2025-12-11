//es lo segundo que creamos
//controla la base de datos

const DB = require('../config/database.js')


class RecetaModel {
    // cuando hago refremcia a RecetaModel y la inicial es en mayuscula  se que estoy hablando de una clase

    //read de nuestro CRUD
    static async obtenerRecetas(){
// es un metodo asincrono por que no se cuando se va a tardar la base de datos
        try {
            //me sirve en caso de que haya un error en la consulta
            // capturar el error y manejarlo de una forma mas controlada
            const [rows] = await DB.query ('SELECT * FROM recetas')  
            //lo que va hacer esta funcion


            return {
                success: true,
                data: rows
            };
        

        
        } catch (error) {

            

                }
              
                // que hago con el error
                // no quiero que se muestre todo el error en la consola
                // si genera erro lo capture en una variable
        // funcion static que sea asyncronajava script no es multihilo no puede dejar ejecutarlo en segundo plano
       
        // lo ejecuta en query y lo retorna en el arrglo row
        // un arreglo que va a contener todos los registros de mis datos
        // le digo que espere a que se ejecute el cuery en mi base de datos

        // me trar las cabeceras de las recetas
    }
     //desarrollamos esta funcion
     // obtenemos por parametro id
    static async obtenerPorId(id){

        try {

            // ejecuto el select la capturo por el row
            const [row] = await DB.query('SELECT * FROM recetas WHERE id= ?',[id])
            // e ponemos los parametros lleves cuadradas una coma y un signo de interrogacion
           
            return row
        }catch (error) {
            throw error

        }
    }
}



module.exports = RecetaModel
//exporto la clase para poder usarla en otro lado

