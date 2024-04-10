const {DataTypes} = require('sequelize')
const db = require('../db/conn')



const quarto1 = db.define('quarto1',{
    
    ocupado:{
        type:DataTypes.STRING,
        require:true
        
    },
    ocupante:{
        type:DataTypes.STRING,
        require:true
        
    },
    
   
   

  
})


module.exports = quarto1