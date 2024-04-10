const { where } = require('sequelize');
const { raw } = require('mysql2');
const Quarto1 = require('../models/quarto1')
const Quarto2 = require('../models/quarto2')
const Quarto3 = require('../models/quarto3')
const User = require('../models/userData');
const quarto3 = require('../models/quarto3');


module.exports = class controller{

    static async showAll(req,res){
        
        res.render('quartos')
         
    }
    static async userRegister(req,res){

        const name = req.body.name
        const cellNumber = req.body.number
        const email = req.body.email
        const numeroQuarto = req.params.id
        console.log(name)
        console.log(numeroQuarto)
        console.log(cellNumber)
        User.create({name,cellNumber,email})
        if(numeroQuarto == 1){
                Quarto1.update({ocupante:name, ocupado:'ocupado'},{where:{id:1}})   
                const deleteData = ()=>{
                    Quarto1.update({ocupante:'nenhum', ocupado:false},{where:{id:1}})
                    console.log('Quarto Liberado')
                }
                setTimeout(deleteData, 1200000)
                res.redirect('/')
        }
          


        if(numeroQuarto == 2){
            Quarto2.update({ocupante:name, ocupado:'ocupado'},{where:{id:1}})
            const deleteData = ()=>{
                Quarto2.update({ocupante:'nenhum', ocupado:false},{where:{id:1}})
                console.log('Quarto Liberado')
            }
            setTimeout(deleteData, 1200000)         
            res.redirect('/')
        }
        


        if(numeroQuarto == 3){
            quarto3.update({ocupante:name, ocupado:'ocupado'},{where:{id:1}})  
            const deleteData = ()=>{
                Quarto3.update({ocupante:'nenhum', ocupado:false},{where:{id:1}})
                console.log('Quarto Liberado')
            }
            setTimeout(deleteData, 1200000) 
            res.redirect('/')
        }
        
        
            
        
    }  
            
        

    
    static async quarto1Controller(req,res){
        if(await Quarto1.findOne({where:{id:1,ocupado:false},raw:true})){        
            res.render('quarto1')
        }
        if(await Quarto1.findOne({where:{id:1,ocupado:'ocupado'},raw:true})){        
            res.redirect('/reserva/quartos')
        }
        
    }
    
    static async quarto2Controller(req,res){
        if( await Quarto2.findOne({where:{id:1,ocupado:false},raw:true})){        
            res.render('quarto2')
        }
        if(await Quarto2.findOne({where:{id:1,ocupado:'ocupado'},raw:true})){        
            res.redirect('/reserva/quartos')
        }
    }
    
    static async quarto3Controller(req,res){
        if( await Quarto3.findOne({where:{id:1,ocupado:false},raw:true})){        
            res.render('quarto3')
        }
        if(await Quarto3.findOne({where:{id:1,ocupado:'ocupado'},raw:true})){        
            res.redirect('/reserva/quartos')
        }
    }
    
}

