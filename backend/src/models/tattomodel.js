const DB = require('../config/database')

class tattomodel {

    static async getAllTattoos() {
        try {
            const [rows] = await DB.query('SELECT * FROM productos');
            return rows;
        } catch (error) {
            throw error;
        }
    }

    static async getidTattoo(id) {
        try {
            const [rows] = await DB.query('SELECT * FROM productos WHERE id= ?',[id]);
            return rows;
        } catch (error) {

        }
    }

}

module.exports = tattomodel;