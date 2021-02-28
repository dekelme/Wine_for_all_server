const { Router } = require('express');
const wineRouter = new Router();

const {wineController} = require('../controllers/wine.ctrl');

wineRouter.get('/', wineController.getWines);
wineRouter.get('/:id', wineController.getWine);
wineRouter.post('/', wineController.addWine);
wineRouter.put('/:id', wineController.updateWine);
wineRouter.delete('/:id', wineController.deleteWine);

module.exports = {wineRouter};