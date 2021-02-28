const { Schema, model } = require('mongoose');

const shippingSchema = new Schema({
    id:{type: Number, required: true},
    winesID: { type: Array, required: true },
    orderPrice: { type: Number, required: true},
    orderDate: {type: Date, require: true},
    trackingNumber: {type: String, required: true},
    shippingAddress: {type: String, required: true},
    shippingPrice: { type: Number, required: true},
    manufactureID: {type: Number, required: true},
    clientID: {type: Array},

},{ collection: 'shippings'});


const Shipping = model('Shipping', shippingSchema);

module.exports =  Shipping;