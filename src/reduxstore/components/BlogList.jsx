import React, { useEffect } from 'react';

const BlogList = ({ posts, loading, error }) => {


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p>Author: {post.author}</p>
                    <p>Email: {post.email}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
