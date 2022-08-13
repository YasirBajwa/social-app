import React from 'react';
import {Container} from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Switch,Route ,Redirect} from 'react-router-dom'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetail from './components/PostDetail/PostDetail';



function App() {
  const user = JSON.parse(localStorage.getItem('user'))


  return (
    <BrowserRouter>
      <Container maxWidth="xl">
       <Navbar/>
        <Switch >
          <Route path="/" exact component={ () => <Redirect to='/posts' />}/>
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id"  component={PostDetail}/>

          <Route path="/auth" exact  component={( ) => ( !user ? <Auth/> : <Redirect to="/posts" />)}/>
        </Switch>
       </Container>
    </BrowserRouter>
  
    
  );
}

export default App;
