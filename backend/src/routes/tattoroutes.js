const EXPRESS = require('express');
const ROUTER = EXPRESS.Router()
const CONTROLLER = require ('../controllers/tattocontrollers');

ROUTER.get('/', CONTROLLER.getAllTattoos);
ROUTER.get('/:id', CONTROLLER.getidTattoo);

module.exports = ROUTER;
