import React, { useState } from 'react';

const CommentForm = ({ postId, addComment }) => {
    const [name, setName] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(postId, { name, body });
        setName('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Comment:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CommentForm;
