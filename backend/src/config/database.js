const mysql = require('mysql2');
require('dotenv').config()

const conectDB = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3308,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

const promesaConectDB = conectDB.promise();
module.exports = promesaConectDB;