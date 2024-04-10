const {DataTypes} = require('sequelize')
const db = require('../db/conn')



const quarto3 = db.define('quarto3',{
    
    ocupado:{
        type:DataTypes.STRING,
        require:true
        
    },
    ocupante:{
        type:DataTypes.STRING,
        require:true
        
    },
   

  
})

module.exports = quarto3