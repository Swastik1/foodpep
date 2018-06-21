const  mongoose = require('mongoose');
// mongoose object has a type property Schema
const { Schema } = mongoose;

// Schema describes the property the user have
const restaurantSchema = new  Schema({
  title: String,
  description: String,
  images: String,
  price: Number,
  completed: Boolean
});
mongoose.model('restaurants',restaurantSchema);
