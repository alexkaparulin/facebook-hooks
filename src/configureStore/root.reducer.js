import { combineReducers } from 'redux'
import searchReducer from './reducers/search.reducer';
import commentReducer from './reducers/comment.reducer';

const rootReducer = combineReducers({
    search : searchReducer,
    postComments: commentReducer
})

export default rootReducer