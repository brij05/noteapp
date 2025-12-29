import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Router from './routes/auth.js'
import connectDB from './db/db.js'


const app=express()
app.use(cors())
app.use(express.json())
app.use('/auth', Router)
dotenv.config()
const port=process.env.PORT 
app.get("/",(req,res)=>{
    res.send("hello brjraj ");
})
app.listen(port,()=>{
    connectDB()
    console.log(`server is listning at port ${port}`);
})