const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')



app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))


app.use(express.static("public"));



//Routes

app.get('/',(req,res)=>{
    res.render('home')
})


const reservaRoutes = require('./routes/reservaRoutes')
const userRoutes = require('./routes/userRoutes')
app.use('/user', userRoutes)
app.use('/reserva', reservaRoutes)



//models

const userData = require('./models/userData')
const quarto1 = require('./models/quarto1')
const quarto2 = require('./models/quarto2')
const quarto3 = require('./models/quarto3')






//Conection
conn.sync({
    force:false
}).then(
    quarto1.create({ocupado:false}),
    quarto2.create({ocupado:false}),
    quarto3.create({ocupado:false}),
    
    app.listen(3000,()=>{
        console.log('banco conectado')
        console.log('rodando na porta 3000')
        
    })
    
   
).catch((err)=>{
    console.log(err)
})

