const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id:{type: Number},
    googleID: {type: String},
    firstName: {type: String, require:true},
    lastName: {type: String},
    email: {type: String, required: true},
    phone: { type: String, required: true},
    gender: {type: String},
    dateOfBirth: {type: Date},
    city: { type: String, required: true},
    street: { type: String, required: true},
    zip: { type: Number, required: true},
    imageURL: {type: String},
    founded: {type: Number},
    isClient:{type: Boolean},
    isManufacture: {type: Boolean},
    favorite: {type: Array}

},{ collection: 'users'});


const User = model('User', userSchema);

module.exports = User




