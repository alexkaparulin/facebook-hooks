import { FETCHING_PHOTOS, PHOTOS_FETCHED, FETCH_ERROR } from "../actions/myUserPhoto.action";

let initialState =  { photosList : [], msg : '' }

export default (state = initialState, action)=>{
    
    switch(action.type){

        case FETCHING_PHOTOS:
            return {...state, msg: 'Loading Data...'  }

        case PHOTOS_FETCHED:
            return {...state, photosList : action.payload , msg: 'Data fetched' }
        
        case FETCH_ERROR:
            return {...state, msg : action.payload }

        default:
            return state
    }
}