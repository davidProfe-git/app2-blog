//es lo 3 que hacemos
// hago solicitud de el modelo
const MODEL = require('../models/recetasModel');

//creo una clase que se llama recetas controller
class RecetasController {
    //Get /api/recetas obtener todas las recetas
   //creo otro metodo asincrono que se llama obtener recetas
    static async obtenerRecetas (req, res){
        try{
        // este obtener recetas es el controlador
        //los edpoints son las rutas de mi api
        //  obtener todas las recetas
        // reques es la peticion
        //repons es la respuesta
        // resetas se va a rutas y rutas se va a controlador el controlador le pide las recetas va al modelo
        // el modelo ejecuta el query y devuelve el formato en un  arreglo 
        // el arreglo lo retorna en una variable rows el retoro al controlador lo parce en formato json y lo envia como respuesta   
        //hay unos codigos de respuesta http  los cuales voy a usar para mi api get para obtener  post para crear delete para eliminar y put para actualizar
        // apunta a un endpoint diferente el servidor responde en diferentes formatos

        // los codigos de error los que van del 100 los maneja el navegador
        // los 200 son exitosos
        // los 300 son redirecciones
        // los 400 son errores del cliente
        // 404 no encontrado esta mal escribida la ruta
        // hay algo mal en la ruta
        // los 500 son errores del servidor
        const resultado = await MODEL.obtenerRecetas()
        //hago llamado a el metodo
        // el metodo me retorna a un arreglo y lo meto en recetas
        // creo una variable recetas y le digo que espere a que se ejecute el metodo obtener recetas
        res.status(200).json(resultado)
            // lo respondo en formato json para que el cliente lo pueda entender
        
        // le digo que la respuesta fue exitosa
        // 

        
        // esta retornardo las recetas que obtuvo del modelo


    
    
    } catch (error) {
      console.error(error);
    // le digo que cree una variable que se llame recetas y le digo que espere a que se ejecute el metodo obtenerRecetas
       //hasta que obtener recetas termine de ejecutarse por que por defecto va a leer la linea  y si no tiene resouesta lo omite
        // este obtenerRecetas es del modelo
        // esta accesiendo a la clase directo
        // la clase tiene que convertirla en un obgeto con una asignacion una variable con new
        // con new clase se metia a la variable y la variable contenia toda la clase
        // como el metodo es static no necesito crear un objeto
        res.status(500).json({
            success: false,
            message: 'Error al obtener las recetas'
        // recetas model corresponde a la clase que acabamos de hacer
        // tiene un metodo que se llama obtener recetas 
        //con obtenerRecetas no podia acceder por que arriba estaba instanciado o encAPSULADO en una variable llamada MODEL

});
}
    }
static async obtenerPorId(req, res){
    // despuens del modelo obtenemos un request y un respond de la funcion
    try{
        const { id } = req.params
        // la constante recibe la id como parametro

        const receta = await MODEL.obtenerPorId(id)
       
       
        
        
        res.status(200).json({
        // recibo la respuesta por id formato json

        success: true,
        data: receta
        // retornamos objeto json con clave data 
        // y array recetas de base de datos

        })

    }catch(error) {
        console.error(error)
        res.status(500).json({
        success: false,
        message: "Error al obtener la receta ID"
        })
    }

}
   
}

module.exports = RecetasController
// exporto la clase para poder usarla en otro lado
