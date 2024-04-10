const express = require('express')
const Reserva = require('../models/quarto1')
const routes = express.Router()
const controller = require('../controllers/controller')


routes.get('/quartos',controller.showAll)

routes.get('/quarto1',controller.quarto1Controller)
routes.get('/quarto2',controller.quarto2Controller)    
routes.get('/quarto3',controller.quarto3Controller)     




module.exports = routes