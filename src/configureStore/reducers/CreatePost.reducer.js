import { OPEN_BOX, CLOSE_BOX } from "../actions/CreatePost.action";

let initialState =  { booleanType: false }

export default (state = initialState, action)=>{
    
    switch(action.type){

        case OPEN_BOX: 
            return { 
                ...state, booleanType: action.payload
            }
        default:
            return state
    }
}