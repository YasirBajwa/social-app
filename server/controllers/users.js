
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserModal from "../modals/userModal.js";


export const signIn =  async(req,res) =>{
    const {email,password} = req.body;

    try {
        const existingUser = await UserModal.findOne({email});
        if(!existingUser){
            return res.status(400).json({msg:"User not found"});
        }
        const isMatch = await bcrypt.compare(password,existingUser.password);
        if(!isMatch){
            return res.status(400).json({msg:"Invalid credentials"});
        }
        const token = jwt.sign({email:existingUser.email,id:existingUser._id},"test",{expiresIn:'1h'});
        res.status(200).json({result:existingUser,token});
        
    } catch (error) {
        res.status(500).json({msg:"Server error"});
    }
}


export const signUp =  async(req,res) =>{

    const {firstName,lastName,email,password,confirmedPassword} = req.body;

    try {
        const existingUser = await UserModal.findOne({email});
        if(existingUser){
            return res.status(400).json({msg:"User already exists"});
        }
        if(password !== confirmedPassword){
            return res.status(400).json({msg:"Passwords do not match"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
     
        const result = await UserModal.create({
            email,
            password:hashedPassword,
            name:`${firstName} ${lastName}`
        });
        const token = jwt.sign({email:result.email,id:result._id},"test",{expiresIn:'1h'});

        res.status(200).json({result,token});

    } catch (error) {
        res.status(500).json({msg:"Server error"});
    }

    
}