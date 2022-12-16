const express= require('express');
const Mealcontroller=require('../Controller/mealtype');

const Server=express.Router()
Server.get('/',Mealcontroller.getallMealType)

module.exports=Server;