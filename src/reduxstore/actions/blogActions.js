export const FETCH_BLOG_POSTS_REQUEST = 'FETCH_BLOG_POSTS_REQUEST';
export const FETCH_BLOG_POSTS_SUCCESS = 'FETCH_BLOG_POSTS_SUCCESS';
export const FETCH_BLOG_POSTS_FAILURE = 'FETCH_BLOG_POSTS_FAILURE';

export const fetchBlogPosts = () => ({
    type: FETCH_BLOG_POSTS_REQUEST
});

export const fetchBlogPostsSuccess = (posts) => ({
    type: FETCH_BLOG_POSTS_SUCCESS,
    payload: posts
});

export const fetchBlogPostsFailure = (error) => ({
    type: FETCH_BLOG_POSTS_FAILURE,
    payload: error
});
