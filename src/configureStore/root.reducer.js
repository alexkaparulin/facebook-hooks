import { combineReducers } from 'redux'
import searchReducer from './reducers/search.reducer';
import commentReducer from './reducers/comment.reducer';
import CreatePostReducer from './reducers/CreatePost.reducer';

const rootReducer = combineReducers({
    search : searchReducer,
    postComments: commentReducer,
    createPost : CreatePostReducer
})

export default rootReducer