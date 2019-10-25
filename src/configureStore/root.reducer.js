import { combineReducers } from 'redux'
import searchReducer from './reducers/search.reducer';

const rootReducer = combineReducers({
    search : searchReducer
})

export default rootReducer