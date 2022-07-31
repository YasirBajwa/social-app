import React,{useState,useEffect} from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";

import useStyles from "./styles";

import memories from "../../images/memories.png";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const classes = useStyles();
  
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
  // console.log('user',user)


  useEffect(() => {
    const token = user?.token;


    setUser(JSON.parse(localStorage.getItem('user')))


  },[])

  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography component={Link} to="/" variant="h2"   className={classes.heading} align="center">
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="60"
          />
        </div>
        <Toolbar className={classes.toolbar}>
            {
                user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography variant="h6" className={classes.userName}>{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={() =>{}}>Logout</Button>

                    </div>

                )

                :(
                    <Button component={Link} to="/auth" variant="contained" className={classes.login} color="primary" onClick={() =>{}}>Login</Button>

                )
            }

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
