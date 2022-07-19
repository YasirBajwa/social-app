import React from 'react';
import {Container,AppBar,Typography,Grid,Grow} from '@material-ui/core';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Forms/Form';

import useStyles from './styles';


function App() {

  const classes = useStyles();


  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" className={classes.heading} align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60"/>
        
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            
            </Grid>
            <Grid item xs={12} sm={4}>
               <Form/>
            </Grid>
          </Grid>
        </Container>

      </Grow>

    </Container>
    
  );
}

export default App;
