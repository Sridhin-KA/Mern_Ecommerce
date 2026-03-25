import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//user registeration

export const registerUser = async (req,res)=>{
    try{
        const {name,email,password} = req.body

        const userExists = await User.findOne({email})
        if (userExists){
            return res.status(400).json({msg:"User aleready exists"})
        }

        const salt = await bcrypt.genSalt(10)
        const  hashedpassword = await bcrypt.hash(password,salt)
        const user = await User.create({
        name,
        email,
        password:hashedpassword,
        
    })
    res.status(201).json({msg:'account created'})
    }
    
    
catch(err){
    res.status(500).json({error:err.message})
}
}

export const loginuser = async(req,res)=>{
    try{
        const {email,password} = req.body
        //data getting from body(form)
        const user = await User.findOne({email})

        //email checking
        if (!user){
           return res.status(400).json({msg:'invalid email'})
        }

        //password checking
        const isMatch = await bcrypt.compare(password,user.password)

        if (!isMatch){
            return res.status(400).json({msg:'invalid password'})
        }
        
        // token creation

        const token = jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            { expiresIn:'1d'}
        )
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token,
        })
    }
    catch(err){
    res.status(500).json({error:err.message})
}
}