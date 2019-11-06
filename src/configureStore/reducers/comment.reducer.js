import { COMMENT } from "../actions/comment.action";

let initialState =  { arrOfComments : [] }

export default (state = initialState, action)=>{
    
    switch(action.type){
        
        case COMMENT: 
        return { 
            ...state,
            arrOfComments  : [...state.arrOfComments, action.comment],
        }
        default:
            return state
    }
}