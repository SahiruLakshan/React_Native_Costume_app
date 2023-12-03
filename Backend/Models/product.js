const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    brand: {type: String, required: true},
    type: {type: String, required: true},
    imageURL: {type: String, required: true},
    price: {type:Number, required: true},
    quantity: {type:Number, required: true},
}, {timestamps: true});

module.exports = mongoose.model("product",ProductSchema)