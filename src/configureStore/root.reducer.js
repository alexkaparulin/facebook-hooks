import { combineReducers } from 'redux'
import searchReducer from './reducers/search.reducer';
import CreatePostReducer from './reducers/createPost.reducer';
import notificationReducer from './reducers/notification.reducer';
import friendRequestsReducer from './reducers/friendRequests.reducer';
import myUserFriendReducer from './reducers/myUserFriend.reducer';
import myUserPhotoReducer from './reducers/myUserPhoto.reducer';

const rootReducer = combineReducers({
    search : searchReducer,
    createPost : CreatePostReducer,
    notification: notificationReducer,
    friendRequests: friendRequestsReducer,
    myUserFriends: myUserFriendReducer,
    myUserPhotos :myUserPhotoReducer
})

export default rootReducer