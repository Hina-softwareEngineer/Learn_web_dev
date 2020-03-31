import {apiCall} from "../../services/api";
import {addError} from "./error";
import {LOAD_MESSGES, REMOVE_MESSAGES} from "../actionTypes";

export const loadMessages= messages =>({
    type:LOAD_MESSGES,
    messages
});

export const fetchMessages=()=>{
    return dispatch => {
        return apiCall("GET","/api/messages").then(res=>
            dispatch(loadMessages(res)).catch(err=> addError(err.message))
        );
    };
}