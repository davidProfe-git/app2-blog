const model = require('../models/tattomodel');

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
            const { id } = req.params;
            console.log(id)
            const tattoo = await model.getidTattoo(id);
            res.json(tattoo);

        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch tattoo by ID' });
            return error;
        }

    }

    static async createTattoo(req, res) {
        try {
            const { nombre, precio } = req.body;

            if (!nombre || !precio) {
                return res.status(400).json({
                    success: false,
                    message: 'Missing required fields'
                })
            } else {
                const newTattoo = await MODEL.createTattoo(req.body)
                res.status(201).json({
                    success: true,
                    data: newTattoo
                })
            }

        } catch (error) {
            res.status(500).json({ error: 'Failed to create tattoo' });
        }

    }
}


module.exports = TattooController;