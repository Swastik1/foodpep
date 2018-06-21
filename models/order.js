const mongoose = require('mongoose');
const { Schema } = mongoose ;

const orderSchema = new Schema({
    title: String,
    description: String,
    images: String,
    price: String,
    completed:Boolean
})
mongoose.model("orders",orderSchema);