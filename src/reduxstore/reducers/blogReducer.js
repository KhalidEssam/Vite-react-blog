import { FETCH_BLOG_POSTS_SUCCESS, FETCH_BLOG_POSTS_FAILURE, FETCH_BLOG_POSTS_REQUEST } from '../actions/blogActionsTypes';

const initialState = {
    posts: [],
    loading: false,
    error: null
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BLOG_POSTS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_BLOG_POSTS_SUCCESS:
            return { ...state, posts: action.payload, loading: false, error: null };
        case FETCH_BLOG_POSTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default blogReducer;
