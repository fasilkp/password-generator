import userModel from '../models/userModel.js'
import bcrypt from 'bcryptjs'
var salt = bcrypt.genSaltSync(10);

export async function register(req, res){
    try{
        const {email, password, name}= req.body;
        if(!email || !password || !name){
            return res.json({err:true, message:"please input all details"})
        }
        let user = await userModel.findOne({email});
        if(user){
            return res.json({err:true, message:"user already exist"})
        }
        const hashPassword = bcrypt.hashSync(password, salt);
        user = await userModel.create({name, email, password:hashPassword})
        req.session.user={
            id:user._id
        }
        return res.json({err:false, message:"Success"})
        

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
        if(bcrypt.compareSync(password, user.password)){
            req.session.user={
            id:user._id
        }
        }
        return res.json({err:false, message:"Success"})
    }catch(err){
        res.json({err:true, message:"something went wrong"})
    }
}

export async function checkLogin(req, res){
    try{
        if(!req.session.user){
            return res.json({login:false, message:"no session"})
        }
        let user = await userModel.findOne({_id:req.session.user.id});
        if(!user){
            return res.json({login:false, message:"no user found"})
        }
        return res.json({login:true, message:"Success"})
    }catch(err){
        console.log(err)
        res.json({err:true, message:"something went wrong"})
    }
}
