import {
    FETCH_BLOG_POSTS_REQUEST,
    FETCH_BLOG_POSTS_SUCCESS,
    FETCH_BLOG_POSTS_FAILURE
    } from './blogActionsTypes';

import dummyPosts from '../../utils/dummyPosts';


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

    export const fetchPosts = (email) => {
        
    return dispatch => {
        dispatch(fetchBlogPosts());

        // Simulate API response delay
        setTimeout(() => {
        const posts = dummyPosts.filter(post => post.email === email);

        if (posts.length > 0) {
            dispatch(fetchBlogPostsSuccess(posts));
        } else {
            dispatch(fetchBlogPostsFailure("No posts found for the provided email."));
        }
        }, 1000); // Simulate 1 second delay
    };
};
