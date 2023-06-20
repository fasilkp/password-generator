import { encrypt } from '../helper/encryptDecryt.js';
import passwordModel from '../models/passwordModel.js'

export async function addPassword(req, res){
    try{
        console.log(req.user)
        const {appName, password, userName}= req.body;
        if(!appName  || !password || !userName){
            return res.json({err:true, message:"please input all details"})
        }
        let passwordExist = await passwordModel.findOne({_id:req.user._id, appName});
        if(passwordExist){
            return res.json({err:true, message:"password already exist"})
        }
        const encyptedPassword =encrypt(password);
        const newPassword = await passwordModel.create({appName, userName,userId:req.user._id, password:encyptedPassword})
        return res.json({err:false, message:"Success"})

    }catch(err){
        console.log(err)
        res.json({err:true, message:"something went wrong"})
    }
}

export async function getPasswords(req, res){
    try{
        if(!appName  || !password || !userName){
            return res.json({err:true, message:"please input all details"})
        }
        let passwordExist = await passwordModel.findOne({appName});
        if(passwordExist){
            return res.json({err:true, message:"password already exist"})
        }
        const encyptedPassword =encrypt(password);
        const newPassword = await passwordModel.create({appName, userName, password:encyptedPassword})
        return res.json({err:false, message:"Success"})
        

    }catch(err){
        console.log(err)
        res.json({err:true, message:"something went wrong"})
    }
}
