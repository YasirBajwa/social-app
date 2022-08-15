
import {GET_ALL,CREATE,UPDATE,DELETE,LIKE,FETCH_BY_SEARCH} from '../constants/actionType';
import * as api from "../api/index.js";

export const getPosts = (page) => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(page);
    // console.log(data)
    dispatch({ type:GET_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPostBySearch = (searchQuery) => async(dispatch) => {
  try {
   const {data:{data}} = await api.fetchPostBySearch(searchQuery);
   dispatch({ type:FETCH_BY_SEARCH, payload: data });

    // console.log(data)   
  } catch (error) {
    console.log(error)
    
  }
}

export const createPost = (post) => async (dispatch) => {

  if(post.selectedFile){

  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
  }
  else{
    alert('Select File is missing')
  }

};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type:LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
