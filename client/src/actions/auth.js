import {AUTH} from '../constants/actionType';
import * as api from "../api/index.js";


export const signIn = (formData,history) => async(dispatch) =>{


     try {
        
        history.push('/auth')
        
     } catch (error) {
        console.log(error)
        
     }

}


export const signUp = (formData,history) => async(dispatch) =>{


    try {
       
       history.push('/')
       
    } catch (error) {
       console.log(error)
       
    }

}
