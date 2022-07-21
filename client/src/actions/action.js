import * as api from '../api/index.js';


export  const getPosts = () => async (dispatch) => {
  try {
    
    const { data } = await api.fetchPosts();
    dispatch({ type: "GET_POSTS", payload: data });

  } catch (error) {
    console.log(error.message)
  }

};


export const createPost = (post) => async (dispatch)=>{
  try {

    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE_POST", payload: data });
    
  } catch (error) {
    console.log(error.message)
  }
}