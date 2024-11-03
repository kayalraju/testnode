// const http=require('http')
// http.createServer(function(req,res){
//     res.write('hello world')
//     res.end()
// }).listen(3002)

const express=require('express')
const ejs=require('ejs')
const path=require('path')
const connectDB=require('./app/config/db')
const dotenv=require('dotenv').config()

const app=express()
connectDB()


//setup view engine ejs
 app.set('view engine', 'ejs');
 app.set('views','views')

//create a static folder
app.use(express.static(path.join(__dirname,'public')))


//define router here
const homeRoute=require('./app/router/homeRoute')
app.use(homeRoute)

const PORT=3004
app.listen(PORT,()=>{
    console.log(`server is running port ${PORT}`);
    
})