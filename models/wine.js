const { Schema, model } = require('mongoose');

const wineSchema = new Schema({
    id:{type: Number},
    wineName: {type: String, required: true},
    year: {type: Number, required: true},
    kind: { type: String, required: true},
    color: {type: String, require: true},
    winePrice: { type: Number, required: true},
    foodPairing: {type: Array, required: true},
    description: {type: String, required: true},
    manufacture: {type: String, required: true},
    manufactureID: {type: Number, required: true},
    winePic: {type: String, required: true}

}, { collection: 'wines'});

const Wine = model('Wine', wineSchema);

module.exports = Wine;
