import React from "react";
import { Grid ,CircularProgress} from "@material-ui/core";

import {useSelector} from 'react-redux';


import Post from "./Post/Post";
import useStyles from './styles';


const Posts = ({setCurrentId}) => {
  const posts = useSelector((state) => state.postReducer);
  const classes = useStyles();

  // console.log(posts)
  return (
    <>
     {!posts.length ? <CircularProgress className={classes.progress} /> :(
      <Grid container className={classes.container} alignItems='stretch'  spacing={3}>
        {
          posts.map((post,index) =>(
            <Grid item xs={12} sm={6} key={post._id}>
              <Post post={post} index={index} setCurrentId={setCurrentId}/>
            
            </Grid>
          ))
        }
      </Grid>      )}
    </>
  );
};

export default Posts;
