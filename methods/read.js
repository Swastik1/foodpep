const express = require('express');
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const restaurants = mongoose.model('restaurants');
 var read = function(filter,callback) {
   restaurants.find(filter,function(err,listofOrders) {
     if (!listofOrders || err) {
       console.log("could not read snippet");
       return;
     }
     callback(null,listofOrders);
   });
 };
 module.exports = read;
