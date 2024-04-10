const {DataTypes} = require('sequelize')
const db = require('../db/conn')



const feedback = db.define('feedback',{
    
    nome:{
        type:DataTypes.STRING,
        require:true
        
    },
    nota:{
        type:DataTypes.STRING,
        require:true
        
    },
    
   
   

  
})


module.exports = feedback