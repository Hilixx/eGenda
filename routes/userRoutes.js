const express = require('express')
const Reserva = require('../models/quarto1')
const routes = express.Router()
const controller = require('../controllers/controller')

routes.get('/register/:id',(req,res)=>{
    const quartoNumero = req.params.id
    console.log(quartoNumero)
    res.render('registerPage',{quartoNumero})
})
routes.post('/register/:id',controller.userRegister)




module.exports = routes