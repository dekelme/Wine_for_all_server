const { Router } = require('express');
const shippingRouter = new Router();

const {shippingController} = require('../controllers/shipping.ctrl');

shippingRouter.get('/', shippingController.getShippings);
shippingRouter.get('/:id', shippingController.getShipping);
shippingRouter.post('/', shippingController.addShipping);
shippingRouter.put('/', shippingController.updateShipping);
shippingRouter.delete('/:id', shippingController.deleteShipping);

module.exports = { shippingRouter };