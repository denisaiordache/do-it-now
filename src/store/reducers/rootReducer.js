import authReducer from "./authReducer";
import taskReducer from "./taskReducer";
import { combineReducers } from "redux";
// import {firestoreReducers} from "react-redux-firebase";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer =  combineReducers({
    //firebase: firebaseReducer,
    auth: authReducer,
    task: taskReducer
  })

export default rootReducer;