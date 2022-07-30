import React,{useState} from 'react';
import {Container,Avatar,Button,Paper,Grid,Typography, TextField} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';

import useStyles from './styles'

const Auth = () => {
const classes = useStyles();
const [showPassword, setShowPassword] = useState(false);
const [isSignUp,setIsSignUp] = useState(false)

// const isSignUp = false;

const handleSubmit = () => {}

const handleChange = () =>{}
const handleShowPassword = () =>{
  setShowPassword((prev) => !prev);
}
const switchMode = () => {
  setIsSignUp((prev) => !prev);
  handleShowPassword(false)
}
  return (
    <Container component="main" maxWidth="xs">
       <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography  variant="h5">{ isSignUp ? 'SignUp' :'Sign In' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignUp && (
              <>
               <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
               <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
              </>
            )}
               <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
               <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
               {
                  isSignUp && (
                    <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" handleShowPassword={handleShowPassword}/>
                  )
               }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignUp ? "Sign Up" : "Sign In"}</Button>
               <Grid container justifyContent="flex-end">
                <Grid item>
                 <Button onClick={switchMode}>
                  {
                    isSignUp ? "Already have an account ? Sign In" : "Dont have an account : SignUp"
                  }
                 </Button>
                </Grid>

               </Grid>
        </form>

      </Paper>
    </Container>
   
  )
}

export default Auth