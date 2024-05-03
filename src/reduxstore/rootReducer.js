import { combineReducers } from 'redux';
import blogReducer from './reducers/blogReducer';
import commentReducer from './reducers/commentReducer';
import userReducer from './reducers/userReducer';
const rootReducer = combineReducers({
    user: userReducer,
    blog: blogReducer,
    comments: commentReducer
});

export default rootReducer;
