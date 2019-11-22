import { FETCHING_DATA, DATA_FETCHED, FETCH_ERROR } from "../actions/myUser.action";

let initialState =  { photosList : [], msg   : ''   }

export default (state = initialState, action)=>{
    
    switch(action.type){

        case FETCHING_DATA:
            return {...state, msg : 'Loading Data...'  }
        
        case DATA_FETCHED:
            return {...state, photosList : action.payload , msg: 'Data fetched' }
        
        case FETCH_ERROR:
            return {...state, msg : action.payload}

        default:
            return state
    }
}