const Cart = require('../model/cart')

exports.PostItem=(req,res,next)=>{
 var price = req.body.price
 var product = req.body.product
 console.log(req.body)
  Cart.create({
    Price : price,
    Product: product
  }).then(item=>{
    console.log(item)
    res.json(item)
  }).catch(err=>{
    console.log(err)
  })
}

exports.ListItem=(req,res,next)=>{
    Cart.findAll().then(item=>{
        res.json(item)
    }).catch(err=>{
        console.log(err)
    })
}


exports.DeleteItem=(req,res,next)=>{
    Cart.findByPk(req.params.id).then(item=>{
        item.destroy()
    }).then(items=>{
        console.log(items)
    }).catch(err=>{
        console.log(err)
    })
}