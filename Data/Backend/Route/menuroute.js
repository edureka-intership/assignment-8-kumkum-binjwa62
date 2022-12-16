const express=require('express');
const menuController= require ("../Controller/menu")

const server=express.Router()
server.get('/:rName',menuController.getallMenuData)

module.exports=server;