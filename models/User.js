const mongoose = require('mongoose');
//mongoose object has a type property Schema
const { Schema } = mongoose;

//Schema describes the property the users have

const userSchema = new Schema({
  googleId: String
});
mongoose.model('users',userSchema);
