import {GET_ALL,CREATE,UPDATE,DELETE,LIKE} from '../constants/actionType';

export default (state = [], action) => {
    switch (action.type) {
        case GET_ALL:
        return action.payload;

        case CREATE:
         return [...state,action.payload]   

        case UPDATE:
        return state.map((post) => post._id === action.payload._id ? action.payload : post)

        case DELETE:
        return state.filter((post) => post._id !== action.payload);

        case LIKE:
        return state.map((post) => post._id === action.payload._id ? action.payload : post)



        default:
        return state;
    }
}