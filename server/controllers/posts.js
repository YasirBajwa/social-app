import mongoose from "mongoose";
import PostMessage from "../modals/postMessage.js";



export const getPosts = async (req, res) => {
  const {page} = req.query;


    try {
          const LIMIT = 4;
          const startIndex = (Number(page) - 1) * LIMIT;
          const total = await PostMessage.countDocuments({})
        
         const posts  = await PostMessage.find().sort({ _id : - 1}).limit(LIMIT).skip(startIndex)

            res.status(200).json({ data: posts , currentPage: Number(page),numberOfPages: Math.ceil(total/LIMIT)});


    } catch (error) {
        res.status(404).json({ message: error.message });
        
    }
  }

 export const getPostBySearch = async (req,res) => {
  const {searchQuery,tags} = req.query;

  // console.log(searchQuery)

  try {
    const  title  =  new RegExp(searchQuery,'i');

    const posts = await PostMessage.find({ $or: [ {title} , { tags : {$in : tags.split(',')}}]});

    //  console.log(posts)
    
   
    res.json({data:posts})
    
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
 } 

export const createPost = async (req,res) => {
    const post = req.body;

    const newPost = new PostMessage({ ...post, creator:req.userId , createdAt: new Date().toISOString() });

    try {
        await newPost.save();
        res.status(201).json(newPost);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
        
    }
}  

export const updatePost = async (req,res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req,res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: `Post with id: ${id} deleted` });


}


export const likePost = async (req, res) => {
    const { id } = req.params;
  
    // If it's authenticated
    if (!req.userId) return res.json({ message: "Unauthenticated" });
  
    // Check
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("No post with that id");
    }
  
    // Find post
    const post = await PostMessage.findById(id);
  
    // If he has liked the post
    const index = post.likes.findIndex((id) => id === String(req.userId));
  
    if (index === -1) {
      // Like the post
      post.likes.push(req.userId);
    } else {
      // Dislike
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
  
    // Like post
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
      new: true,
    });
  
    // send response
    res.json(updatedPost);
  };