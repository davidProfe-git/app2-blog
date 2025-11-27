const model = require ('../models/tattomodel');

class TattooController {

    static async getAllTattoos(req, res) {
        try {
            const tattoos = await model.getAllTattoos();
            res.status(200).json(tattoos);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch tattoos' });
        }
    }

    static async getidTattoo(req, res) {
        try {
            const {id} = req.params;
            console.log(id)
            const tattoo = await model.getidTattoo(id);
            res.json(tattoo);
            
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch tattoo by ID' });
            return error;
        }

} } 


module.exports = TattooController;