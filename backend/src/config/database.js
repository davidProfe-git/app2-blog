const mysql = require(´mysql2´);
require( ´dotenv´ ).config()

const conectdB = mysql.createpool({
    host: Process.env.DB_HOST,
    user: Process.env.DB_USER,
    password: Process.env.DB_PASSWORD,
    database: Process.env.DB_MANE,
    waiForConnections:true,

    queuelimit: 0,
}

)