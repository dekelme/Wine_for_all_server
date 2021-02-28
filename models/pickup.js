const { Schema, model } = require('mongoose');

const pickupSchema = new Schema({
    winesID: { type: Array, required: true },
    // deliveryStage: {type: String, required: true},
    pickupPrice: { type: Number, required: true},
    pickupDate: {type: String, require: true},
    pickupCode: {type: String, required: true},
}, { collection: 'pickups'});

const Pickup = model('Pickup', pickupSchema);


module.exports =  Pickup;