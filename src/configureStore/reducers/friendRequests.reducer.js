import { FETCHING_FRIENDS, FRIENDS_FETCHED, FETCH_ERROR } from "../actions/friendRequests.action";

let initialState =  { dataOfFriends : [], msg   : ''   }

export default (state = initialState, action)=>{
    
    switch(action.type){

        case FETCHING_FRIENDS:
            return {...state, msg : 'Loading Data...'  }
        
        case FRIENDS_FETCHED:
            return {...state, data : action.payload , msg: 'Data fetched' }
        
        case FETCH_ERROR:
            return {...state, msg : action.payload}

        default:
            return state
    }
}