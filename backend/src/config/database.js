const mysql = require('mysql2');
require('dotenv').config()

<<<<<<< HEAD
const conectDB = mysql.createPool({
=======
const conectdB = mysql.createPool({
>>>>>>> origin/alexander
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
<<<<<<< HEAD
    port: 3308,
=======
>>>>>>> origin/alexander
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

<<<<<<< HEAD
const promesaConectDB = conectDB.promise();
module.exports = promesaConectDB;
=======

module.exports = conectdB;
>>>>>>> origin/alexander
