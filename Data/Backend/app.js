const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser')
const Restroute=require('./Route/myRoute')
const Locroute=require('./Route/location')
const Mealroute=require('./Route/mealtype')
const Menuroute=require('./Route/menuroute')
const cors=require('cors')

//creating a server.
const PORT=9999;
const server=express();


//adding middleware...
server.use(cors())
server.use(bodyParser.json())
server.use('/Restaurants',Restroute)
server.use('/Location',Locroute)
server.use('/Mealtype',Mealroute)
server.use('/Menu',Menuroute)


//listening to the port...
server.listen(PORT,()=>console.log('server running on port '+PORT));


mongoose.connect('mongodb://localhost:27017/akshat',()=>{console.log('MongoBD Connected succesfully');})