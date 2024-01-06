import React from 'react';

const PostContainer: React.FC<{ title: string; content: string }> = ({ title, content }) => {
    return (
        <div className="border p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default PostContainer;