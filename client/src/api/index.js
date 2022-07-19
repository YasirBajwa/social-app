import axios from 'axios';


const url = 'http://localhost:5000/posts' ;


const fetchPosts = async () => {
  const response = await axios.get(url);
  return response.data;
}