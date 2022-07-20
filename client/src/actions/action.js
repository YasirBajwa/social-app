import * as api from '../api/index.js';


export  const getPosts = () => async (dispatch) => {
  try {
    
    const { data } = await api.fetchPosts();
    dispatch({ type: "GET_POSTS", payload: data });

  } catch (error) {
    console.log(error.message)
  }

};
