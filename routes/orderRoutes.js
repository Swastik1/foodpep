const express = require('express');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const create = require('../methods/create');
const read = require('../methods/read');
const restaurants = mongoose.model('restaurants');
module.exports = (app) => {
    app.get('/api/orders',function(req,res){
        read({},function(err,listofOrders){
          if (err) {
            res.json(err)
          }
          res.json(listofOrders);
          res.status(200);
        })
      })
      
      app.post('/api/orders',function(req,res){
        create(req.body,function(err){
          res.json(order);
          res.status(201);
        });
      })
      app.delete('/api/orders',function(req,res){
        restaurants.remove({},function (err){
          res.json('collection removed');
          res.status(200);
        })
      })
      };
      

