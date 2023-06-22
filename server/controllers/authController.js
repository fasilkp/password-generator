import userModel from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import validatePassword from '../helper/validatePassword.js'
var salt = bcrypt.genSaltSync(10);

export async function register(req, res){
    try{
        const {email, password, name}= req.body;
        if(!email || !password || !name){
            return res.json({err:true, message:"please input all details"})
        }
        const validationPassword = validatePassword(password)
        if (!validationPassword.status) {
            return res.json({err:true, message:validationPassword.message[0].message})
        }
        let user = await userModel.findOne({email});
        if(user){
            return res.json({err:true, message:"user already exist"})
        }
        const hashPassword = bcrypt.hashSync(password, salt);
        user = await userModel.create({name, email, password:hashPassword})
        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET
        )
        return res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 5,
            sameSite: "none",
        }).json({err:false, message:"Success"})
    }catch(err){
        res.json({err:true, message:"something went wrong"})
    }
}
export async function login(req, res){
    try{
        const {email, password}= req.body;
        if(!email || !password){
            return res.json({err:true, message:"please input all details"})
        }
        let user = await userModel.findOne({email});
        if(!user){
            return res.json({err:true, message:"no user found"})
        }
        if(!bcrypt.compareSync(password, user.password)){
            return res.json({err:true, message:"Invalid password"})
            
        }
        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET
        )
        return res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 5,
            sameSite: "none",
        }).json({err:false, message:"Success"})
    }catch(err){
        console.log(err)
        res.json({err:true, message:"something went wrong"})
    }
}

export const checkLogin = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token)
            return res.json({ login: false, error: true, message: "no token" });
        const verifiedJWT = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(verifiedJWT.id, { password: 0 });
        if (!user) {
            return res.json({ login: false, message:"invalid user" });
        }
        return res.json({ user, login: true, token });
    } catch (err) {
        console.log(err)
        res.json({ login: false, error: err });
    }
}

export const logout = async (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none",
    }).json({ message: "logged out", error: false });
}