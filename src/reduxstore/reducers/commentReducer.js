import { ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE } from '../actions/commentActions';

const initialState = {
    comments: {},
    loading: false,
    error: null
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT_REQUEST:
            return { ...state, loading: true, error: null };
        case ADD_COMMENT_SUCCESS:
            const { postId, comment } = action.payload;
            const updatedComments = { ...state.comments };
            updatedComments[postId] = [...(updatedComments[postId] || []), comment];
            return { ...state, comments: updatedComments, loading: false, error: null };
        case ADD_COMMENT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default commentReducer;
