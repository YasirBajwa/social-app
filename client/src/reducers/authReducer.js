import {AUTH,LOGOUT} from '../constants/actionType';


const authReducer = ( state = { authData:null} ,action ) =>{

    switch(action.type){
        case AUTH:
            localStorage.setItem('user',JSON.stringify({...action?.payload}));
            return {...state,authData:action?.payload};

        // case LOGOUT:
        //     return action.payload;
        default:
            return state;
    }

}

export default authReducer