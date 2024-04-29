import { combineReducers } from 'redux';
import blogReducer from './reducers/blogReducer';
import commentReducer from './reducers/commentReducer';

const rootReducer = combineReducers({
    blog: blogReducer,
    comments: commentReducer
});

export default rootReducer;
