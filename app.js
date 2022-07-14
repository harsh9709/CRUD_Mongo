//localhost 9000

// GET : http://localhost:9000/aliens
// GET :http://localhost:9000/aliens/<id>
// POST : http://localhost:9000/aliens
//PATCH:  http://localhost:9000/aliens/<id>


const mongoose =require('mongoose');
const express =require('express');
const alienRouter=require('./Routers/aliens')

const app=express();
const port =process.env.PORT ||9000;
app.use(express.json())   
app.use('/aliens',alienRouter)

const url ='mongodb://localhost/AlienDBex';

mongoose.connect(url,{useNewUrlParser:true})

const con =mongoose.connection;
con.on('open',()=>{
    console.log("connected to mongodb");
})
  //eable to read json property


app.listen(port,()=>console.log(`server is listening on port ${port}...`));