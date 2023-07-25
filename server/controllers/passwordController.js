import { decrypt, encrypt } from '../helper/encryptDecryt.js';
import passwordModel from '../models/passwordModel.js'

export async function addPassword(req, res){
    try{
        console.log(req.user)
        const {appName, password, userName}= req.body;
        if(!appName  || !password || !userName){
            return res.json({err:true, message:"please input all details"})
        }
        let passwordExist = await passwordModel.findOne({userId:req.user._id, appName, userName});
        console.log(passwordExist)
        if(passwordExist){
            return res.json({err:true, message:"password already exist"})
        }
        const encyptedPassword =encrypt(password);
        const passwordPresent = await passwordModel.findOne({'password.encryptedData':encryptePassword.encryptedData});
        if(passwordPresent){
            return res.json({err:true, message:"not a unique password"})
        }
        const newPassword = await passwordModel.create({appName, userName,userId:req.user._id, password:encyptedPassword})
        return res.json({err:false, message:"Success"})

    }catch(err){
        console.log(err)
        res.json({err:true, message:"something went wrong"})
    }
}

export async function getPasswords(req, res){
    try{
        let passwords = await passwordModel.find({userId:req.user._id});
        passwords= passwords.map((item)=>{
            return { appName:item.appName, userName:item.userName, _id:item._id, password: decrypt(item.password)}
        })
        return res.json({err:false, message:"Success", passwords})
    }catch(err){
        console.log(err)
        res.json({err:true, message:"something went wrong"})
    }
}

export async function deletePassword(req, res){
    try{
        console.log(req.body.id)
        await passwordModel.deleteOne({userId:req.user._id, _id:req.body.id })
        return res.json({err:false, message:"Successfully deleted"})
    }catch(err){
        console.log(err)
        res.json({err:true, message:"something went wrong"})
    }
}