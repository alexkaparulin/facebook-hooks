import { combineReducers } from 'redux'
import searchReducer from './reducers/search.reducer';
import CreatePostReducer from './reducers/createPost.reducer';

const rootReducer = combineReducers({
    search : searchReducer,
    createPost : CreatePostReducer
})

export default rootReducer