const express = require('express');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const create = require('../methods/create');
const read = require('../methods/read');
const restaurants = mongoose.model('restaurants');
module.exports = (app) => {
  app.get('/api/restaurants' , function(req,res){
    restaurants.find(function(err,restaurants){
      if (err) {
      throw err;

    }
    res.json(restaurants);

  })
  });


  app.post('/api/restaurants',(req,res) => {
var restaurant = req.body;

restaurants.create(
  restaurant , function(err,restaurants){
    if (err) {
      throw err;
    }
    res.json(restaurants);
  })
});


app.delete('/api/restaurants/:_id',function(req,res){
  var query = {_id: req.params._id};

  restaurants.remove(query , function(err,restaurants){
    if (err) {
      throw err;
    }
    res.json(restaurants);
  })
});

app.put('/api/restaurants/:_id',function(req,res){
  var restaurant = req.body;
  var query = {_id:req.params._id};
  // if the field doesnt exist $set will set up a new field
  var update  = {
    '$set': {
      title:restaurant.title,
      description:restaurant.description,
      image:restaurant.image,
      price:restaurant.price
    }
  };
  // when true returns the update ddocument
  var options = {new: true};
  restaurants.findOneAndUpdate(query,update,options,function(err,restaurants){
    if (err) {
      throw err;
    }
    res.json(restuarants);
  })
});

}
