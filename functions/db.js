const mongoose = require('mongoose')
const mongoURI ="mongodb+srv://nitingangwani982000:Gangwani%4009@resumebuilder.svatbj9.mongodb.net/Resume"
const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected")
    })
}
module.exports=connectToMongo