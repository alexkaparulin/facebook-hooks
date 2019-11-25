import { FETCHING_MYUSER_FRIENDS, MYUSER_FRIENDS_FETCHED, FETCH_ERROR } from "../actions/myUserFriend.action";

let initialState =  { friends: []  ,msg : '' }

export default (state = initialState, action)=>{
    
    switch(action.type){
        
        case FETCHING_MYUSER_FRIENDS:
            return {...state, msg : 'Loading Data...'  }
            
        case MYUSER_FRIENDS_FETCHED:
            return {...state, friends : action.payload , msg: 'Data fetched' }

        case FETCH_ERROR:
            return {...state, msg : action.payload }

        default:
            return state
    }
}