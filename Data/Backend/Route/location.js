const express= require('express');
const locRoute=require('../Controller/location');

const Server=express.Router()
Server.get('/',locRoute.getallLocation)
Server.get('/:Name',locRoute.getLocationByName)

module.exports=Server;