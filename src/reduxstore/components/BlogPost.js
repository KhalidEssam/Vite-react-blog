import React from 'react';
import CommentContainer from '../containers/CommentContainer';

const BlogPost = ({ post }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <CommentContainer postId={post.id} />
        </div>
    );
};

export default BlogPost;
