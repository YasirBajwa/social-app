import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) =>{
    if(localStorage.getItem('user')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }
    return req;
})


export const fetchPosts =  () =>  API.get('/posts')
export const createPost =  (newPostData) =>  API.post('/posts',newPostData);
export const updatePost =  (id,updatedPost) =>  API.patch(`/posts/${id}`,updatedPost);
export const deletePost =  (id) =>  API.delete(`/posts/${id}`,id);
export const likePost = (id) =>  API.patch(`/posts/${id}/likePost`);


export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);