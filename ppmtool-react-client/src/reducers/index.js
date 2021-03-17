import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectRducer from './projectReducer'

export default combineReducers({
    errors: errorReducer,
    project: projectRducer
});