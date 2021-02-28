const { Router } = require('express');
const pickupRouter = new Router();

const {pickupController} = require('../controllers/pickup.ctrl');

pickupRouter.get('/', pickupController.getPickups);
pickupRouter.get('/:id', pickupController.getPickup);
pickupRouter.post('/', pickupController.createPickup);
pickupRouter.delete('/:id', pickupController.deletePickup);

module.exports = { pickupRouter };