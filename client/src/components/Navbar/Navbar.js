import React,{useState,useEffect} from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import {useDispatch} from 'react-redux'
import {Link,useHistory,useLocation} from 'react-router-dom'

import useStyles from "./styles";
import memories from "../../images/memories-Logo.png";
import memoryText from "../../images/memories-Text.png";

import decode from 'jwt-decode';


const Navbar = () => {
  const classes = useStyles();
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation()

  const logOut = () => {
    dispatch({type:'LOGOUT'});
    history.push('/auth');

    setUser(null)
  }
  useEffect(() => {
    const token = user?.token;

    if(token){
      const decodeToken  = decode(token);
      if(decodeToken && decodeToken.exp * 1000 < new Date().getTime() ) logOut()
    }

    setUser(JSON.parse(localStorage.getItem('user')))
  },[location])

  

  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Link to="/" className={classes.brandContainer}>
          <img src={memoryText} alt="icon" height="45px"/>
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="40px"
          />
        </Link>
        <Toolbar className={classes.toolbar}>
            {
                user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography variant="h6" className={classes.userName}>{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logOut}>Logout</Button>

                    </div>

                )

                :(
                    <Button component={Link} to="/auth" variant="contained" className={classes.login} color="primary">Login</Button>

                )
            }

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
