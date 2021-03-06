import axios from 'axios';


const url = 'http://localhost:5000/posts' ;


export const fetchPosts =  () =>  axios.get(url)
  
export const createPost =  (newPostData) =>  axios.post(url,newPostData);

export const updatePost =  (id,updatedPost) =>  axios.patch(`${url}/${id}`,updatedPost);

export const deletePost =  (id) =>  axios.delete(`${url}/${id}`,id);

export const likePost = (id) =>  axios.patch(`${url}/${id}/likePost`);