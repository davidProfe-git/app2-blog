// esta es la conexion a la base de datos
// que por donde primero se empieza llamado a libreia mysql2 y dont.env
//declaramos una constante llamada mysql que requiere el paquete mysql2
//y otra constante que requiere dotenv para manejar variables de entorno
const mysql = require ('mysql2');
require('dotenv').config()
//creamos una conexion a la base de datos usando las variables de entorno
//definidas en el archivo .env
//usamos createPool para manejar multiples conexiones
const conectdB = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0


})
//exportamos la conexion a la base de datos usando promesas
//para poder usar async/await en las consultas
//en otros archivos
// asi evitamos el uso de callbacks
//y hacemos el codigo mas limpio y facil de leer
//usamos module.exports para exportar la conexion
const promesaConect = conectdB.promise();
module.exports = conectdB.promise();
//exporto este scripit para que pueda ser usado por el modelo
// creamos la promesa por que no se cuento se va a demorar la base datos y no se reviente