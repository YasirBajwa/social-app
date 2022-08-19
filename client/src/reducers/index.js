
import { combineReducers } from "redux";
import posts from './postReducer';
import authReducer from './authReducer';

export default combineReducers({posts,authReducer})