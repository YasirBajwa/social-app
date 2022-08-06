import {AUTH} from '../constants/actionType';
import * as api from "../api/index.js";


export const signIn = (formData,history) => async(dispatch) =>{


     try {
         const { data } = await api.signIn(formData);
         console.log('action==>',data)
         dispatch({ type: AUTH, data });


        
        history.push('/')
        
     } catch (error) {
        console.log(error)
        
     }

}


export const signUp = (formData,history) => async(dispatch) =>{
    try {
      const { data } = await api.signUp(formData);
      // console.log('action==>',data)
      dispatch({ type: AUTH, data });
     history.push('/')
                                   
    } catch (error) {
       console.log(error)
       
    }

}
