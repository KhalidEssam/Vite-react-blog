import React from 'react';

const CommentList = ({ comments, loading, error }) => {
    if (loading) {
        return <div>Loading comments...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h3>Comments:</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <strong>{comment.name}</strong>: {comment.body}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentList;
