const express = require('express')
const app = express()
const Parser = require('body-parser')

const sequelize = require('./util/database')
const cors = require('cors')



app.use(cors())
app.use(Parser.json({extended:false}))

const Carts = require('./route/cart')
app.use(Carts)

sequelize.
sync().then(result=>{
  app.listen(3000)
}).catch(err=>{
    console.log(err)
})