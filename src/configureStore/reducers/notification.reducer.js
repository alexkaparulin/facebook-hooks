import { ADD_FOCUS } from "../actions/notification.action";


let initialState =  { booleanType: false}

export default (state = initialState, action)=>{
    
    switch(action.type){

        case ADD_FOCUS: 
            return { 
                ...state, booleanType: action.payload
            }
        default:
            return state
    }
}