import React,{useState} from 'react'
import useStyles from './styles';
import { TextField,Paper,Button ,Typography} from '@material-ui/core';

const Form = () => {
  const [postData,setPostData] = useState({
    creator:'',title:'',message:'',tags:'',selectedFile:''
  })
  const classes = useStyles();


  const handleSubmit = (e) => {
          e.preventDefault()  
  }
  return (
    <Paper className={classes.paper}>
      <form autoComplete='false' noValidate  className={classes.form} onSubmit={handleSubmit}>
           <Typography variant="h6">Creating Memories</Typography>
           <TextField name='creators' variant='outlined' label='creator' fullWidth value={postData.creator} onChange={ (e) => setPostData({creator:e.target.value})}/>
      </form>

    </Paper>
  )
}

export default Form