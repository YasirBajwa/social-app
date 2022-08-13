import React ,{useEffect,useState}from 'react';

import {Container,Grid,Grow , Paper,AppBar,TextField,Button}from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Forms/Form';
import { useDispatch } from 'react-redux';
import {getPosts} from '../../actions/action';
import useStyles from './styles';
import Pagination from '../Pagination';
import { useHistory, useLocation} from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';


function useQuery(){
  return new URLSearchParams(useLocation().search);
}


const Home = () => {
    const [currentId,setCurrentId] = useState(null)
    const classes = useStyles();
    const dispatch = useDispatch();

    const query = useQuery();
    const history = useHistory();

    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

  
    useEffect(()=>{
      dispatch(getPosts())
    },[currentId,dispatch])
  
  return (
    <div>
      <Grow in>
        <Container maxWidth="xl">
          <Grid container className={classes.gridContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId}/>
            
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <AppBar className={classes.appBarSearch} position="static" color="inherit">
                  <TextField 
                     name="Search"
                     variant='outlined'
                     label="Search Memories" 
                     fullWidth 
                     value="search" 
                     onChange={() => {}}
                     />

                </AppBar>
               <Form currentId={currentId} setCurrentId={setCurrentId}/>
               <Paper  elevation={6}>
                    <Pagination/>
               </Paper>
            </Grid>
          </Grid>
        </Container>

      </Grow>
    </div>
  )
}

export default Home