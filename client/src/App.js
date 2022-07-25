import React ,{useEffect,useState}from 'react';
import { useDispatch } from 'react-redux';
import {Container,AppBar,Typography,Grid,Grow} from '@material-ui/core';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Forms/Form';
import Navbar from './components/Navbar/Navbar';

import {getPosts} from './actions/action'

import useStyles from './styles';


function App() {
  const [currentId,setCurrentId] = useState(null)
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts())
  },[currentId,dispatch])


  return (
    <Container maxWidth="lg">
     <Navbar/>
      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            
            </Grid>
            <Grid item xs={12} sm={4}>
               <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>

      </Grow>

    </Container>
    
  );
}

export default App;
