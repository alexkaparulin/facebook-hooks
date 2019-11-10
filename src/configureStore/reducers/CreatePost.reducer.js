import { OPEN_BOX, ADD_NEW_POST } from "../actions/createPost.action";

let initialState =  { booleanType: false, posts: []}

export default (state = initialState, action)=>{
    
    switch(action.type){

        case OPEN_BOX: 
            return { 
                ...state, booleanType: action.payload
            }
        case ADD_NEW_POST:
            return {
                ...state,  posts  : [...state.posts, action.payload]
            }
        default:
            return state
    }
}