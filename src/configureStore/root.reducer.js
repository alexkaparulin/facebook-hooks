import { combineReducers } from 'redux'
import searchReducer from './reducers/search.reducer';
import CreatePostReducer from './reducers/createPost.reducer';
import notificationReducer from './reducers/notification.reducer';
import friendRequestsReducer from './reducers/friendRequests.reducer';

const rootReducer = combineReducers({
    search : searchReducer,
    createPost : CreatePostReducer,
    notification: notificationReducer,
    friendRequests: friendRequestsReducer
})

export default rootReducer