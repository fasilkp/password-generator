import userModel from '../models/userModel.js'
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
        user = await userModel.create({name, email, password})
        req.session.user={
            id:user._id
        }
        return res.json({err:false, message:"Success"})
        

    }catch(err){
        res.json({err:true, message:"something went wrong"})
    }
}