const {DataTypes} = require('sequelize')
const db = require('../db/conn')



const quarto2 = db.define('quarto2',{
    
    ocupado:{
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: 'livre'
    },
    ocupante:{
        type:DataTypes.STRING,
        
        
    },

    
    
    
  
})



module.exports = quarto2