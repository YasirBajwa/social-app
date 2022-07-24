import mongoose from "mongoose";
import PostMessage from "../modals/postMessage.js";



export const getPosts = async (req, res) => {
    try {
        
         const postMessages  = await PostMessage.find();
        
            res.status(200).json(postMessages);


    } catch (error) {
        res.status(404).json({ message: error.message });
        
    }
  }

export const createPost = async (req,res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
        
    }
}  

export const updatePost = async (req,res) => {
    const post = req.body;
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({message : "Invalid Id"});
    const updatedPost = await PostMessage.findByIdAndUpdate(id,post,{new : true});
    res.status(200).json({ message: "Post updated" });

}