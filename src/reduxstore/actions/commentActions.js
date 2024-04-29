export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addComment = (postId, comment) => ({
    type: ADD_COMMENT_REQUEST,
    payload: { postId, comment }
});

export const addCommentSuccess = (postId, comment) => ({
    type: ADD_COMMENT_SUCCESS,
    payload: { postId, comment }
});

export const addCommentFailure = (postId, error) => ({
    type: ADD_COMMENT_FAILURE,
    payload: { postId, error }
});
