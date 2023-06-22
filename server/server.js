import 'dotenv/config.js'
import express from 'express'
import dbConnect from './dbConnect.js'
import cors from 'cors'
import path from 'path'
import { checkLogin, login, logout, register } from './controllers/authController.js'
import cookieParser from 'cookie-parser'
import { addPassword, deletePassword, getPasswords } from './controllers/passwordController.js'
import verifyUser from './middleware/verifyUser.js'
const app = express()

app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve()+"/public"))

app.use(
  cors({
    origin: [
      "http://localhost:3000", 
      "https://passgenfs.netlify.app"
    ],
    credentials: true,
  })
);

dbConnect()

app.get("/", (req, res)=>res.send("App running"))
app.post("/login", login)
app.get("/login/check", checkLogin)
app.get("/logout/", logout)
app.post("/register", register)
app.post("/password/add",verifyUser, addPassword)
app.get("/passwords",verifyUser, getPasswords)
app.patch("/password",verifyUser, deletePassword)


app.listen(4000, ()=>{
    console.log("server running on http://localhost:4000")
})