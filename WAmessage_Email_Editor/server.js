const express = require('express')
const app = express()
const mongoose = require('mongoose')
const tempmodel = require('./model')
const routes = require('./router')
const cors = require('cors')
const dotenv = require('dotenv').config()
const path = require('path')

const port=process.env.PORT

app.use(express.json()) 
app.use(cors())

mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log(" Mongoose is connected"))
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// new
app.use("/api", routes) // new

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/FrontEnd/build")));

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"FrontEnd","build","index.html"));
    })
}else{
    app.get("*",(req,res)=>{
        res.send("RUnning")
    })
}


app.listen(port,()=>console.log("on port", port))


// 8830631677