import express from 'express'
import dbConnect from './dbConnect.js'
import cors from 'cors'
import path from 'path'
import session from 'express-session'
import { checkLogin, login, register } from './controllers/authController.js'
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
            // secure:true,
            // httpOnly:true,
            maxAge:1000*60*10
    }
}))

dbConnect()


app.post("/login", login)
app.get("/login/check", checkLogin)
app.post("/register", register)

app.listen(4000, ()=>{
    console.log("server running on http://localhost:4000")
})