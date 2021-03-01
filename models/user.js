const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id:{type: Number},
    googleID: {type: String},
    firstName: {type: String, require:true},
    lastName: {type: String},
    email: {type: String, required: true},
    phone: { type: String},
    gender: {type: String},
    dateOfBirth: {type: String},
    city: { type: String},
    street: { type: String},
    zip: { type: Number},
    imageURL: {type: String},
    founded: {type: Number},
    isClient:{type: Boolean},
    isManufacture: {type: Boolean},
    favorite: {type: Array}

},{ collection: 'users'});


const User = model('User', userSchema);

module.exports = User




