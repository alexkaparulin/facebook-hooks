import { FETCHING_DATA, DATA_FETCHED, FETCH_ERROR } from "../actions/search.action";

let initialState =  { data : [], msg   : ''   }

export default (state = initialState, action)=>{
    
    switch(action.type){

        case FETCHING_DATA:
            return {...state, msg : 'Loading Data...'  }
        
        case DATA_FETCHED:
            return {...state,data : action.payload , msg:'Data fetched' }
        
        case FETCH_ERROR:
            return {...state, msg : action.payload}

        default:
            return state
    }
}