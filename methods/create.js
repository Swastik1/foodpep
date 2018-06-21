const express = require('express');
const requireLogin = require('../middlewares/requireLogin');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const restaurants = mongoose.model('restaurants');
var create = function(order,callback) {
  restaurants.create(order,function(err,result){
    if ( err || !order) {
      console.log("Could not create order",order);
      console.log(err);
      return;
    }
    callback(null,result);
  });
};
module.exports = create;
