import express from 'express'
import dbConnect from './dbConnect.js'
import cors from 'cors'
import path from 'path'
import session from 'express-session'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve()+"/public"))

app.use(
  cors({
    origin: [
      "http://localhost:3000", 
    ],
    credentials: true,
  })
);

app.use(session({
    secret:"secretkey",
    saveUninitialized:true,
    resave:false,
    cookie:{
            sameSite:"none",
            secure:true,
            httpOnly:true,
            maxAge:60*60*1000*24*7
    }
}))

dbConnect()

app.listen(4000, ()=>{
    console.log("server running on http://localhost:4000")
})