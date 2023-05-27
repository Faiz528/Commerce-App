const express = require ('express')
const route = express.Router()
const Cart = require('../control/cart')

route.post('/add' , Cart.PostItem)

route.get('/list' , Cart.ListItem)

route.delete("/delete/:id" , Cart.DeleteItem)

module.exports= route