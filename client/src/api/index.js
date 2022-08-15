import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) =>{
    if(localStorage.getItem('user')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }
    return req;
})


export const fetchPosts =  (page) =>  API.get(`/posts?page=${page}`);
export const fetchPostBySearch =  (searchQuery) =>  API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);

export const createPost =  (newPostData) =>  API.post('/posts',newPostData);
export const updatePost =  (id,updatedPost) =>  API.patch(`/posts/${id}`,updatedPost);
export const deletePost =  (id) =>  API.delete(`/posts/${id}`,id);
export const likePost = (id) =>  API.patch(`/posts/${id}/likePost`);


export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);