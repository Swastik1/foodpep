const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('./models/user');
require('./models/restaurants');

require('./services/passport');

mongoose.Promise = global.Promise;


mongoose.connect(keys.mongoURI),{
  useMongoClient:true
};

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
var db = mongoose.connection;
db.on('error',console.log.bind(console,'#MongoDB - connection error: '));
/*--Set up Sessions --*/
app.use(session({
  secret: 'mySecretString',
  saveUninitialized: false,
  resave: false,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 2},
    keys: [keys.cookieKey],
  store: new MongoStore({mongooseConnection: db,ttl: 2 * 24 * 60 * 60})

})
)
// SAVE SESSION CART API //
app.post('/api/cart',function(req,res){
  var cart = req.body;
  req.session.cart = cart;
  req.session.save(function(err){
    if(err){
      throw err;
    }
    res.json(req.session.cart);
  })

});
// GET SESSION CART api //
app.get('/api/cart',function(req,res){
  if (typeof req.session.cart !== 'undefined' ){
    res.json(req.session.cart);
  }
});
// End session cart set up //
app.get('/api/images',function(req,res){
  const imgFolder = __dirname + '/client/public/images/';
  //REQUIRE FILE SYSTEM
  const fs = require('fs');
  //READ ALL FILES IN THE DIRECTORY //
  fs.readdir(imgFolder,function(err,files){
    if (err){
      return console.error(err);
    }
    // CREATE AN EMPTY ARRAY
    const filesArr = [];
    // ITERATE ALL IMAGES TO THE DIRECTORY AND ADD TO THE array //
    files.forEach(function(file){
      filesArr.push({name: file});

    })

    //SEND THE JSON RESPONSE WITH THE ARRAY //
    res.json(filesArr);
  })
});



app.use(passport.initialize());
app.use(passport.session());
// immediately call the app after requiring authroutes to perform the function
require('./routes/authRoutes')(app);
require('./routes/restaurantRoutes')(app);
if (process.env.NODE_ENV === 'production'){
/*
Express will serve up production assets
like our main.js file
*/
app.use(express.static('client/build'));
/* express will serve up index.html file
if it doesn't recognize the route
*/
const path = require('path');
app.get('*',(req,res) => {
  res.sendFile(path.resolve(__dirname,'client','build','index.html'));
});
}






const PORT = process.env.PORT || 5000;
app.listen(PORT);
