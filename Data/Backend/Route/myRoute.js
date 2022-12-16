const express= require('express');
const resRoute=require('../Controller/restaurant');

const Server=express.Router()
Server.get('/',resRoute.getallRestaurant)
Server.get('/:Name',resRoute.getRestaurantByName)
Server.get('/city/:cityID',resRoute.getRestaurantByCity)
Server.get('/Filter/:P_no',resRoute.getRestaurantByFilter)
Server.post('/Filter/:P_no',resRoute.getRestaurantByFilter)

module.exports=Server;