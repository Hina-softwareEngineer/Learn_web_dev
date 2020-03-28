import {combineReducers} from "redux";
import currentUser from "./currentUser";
import errors from "./error";


const rootReducer = combineReducers({
    currentUser,
    errors
});

export default rootReducer;