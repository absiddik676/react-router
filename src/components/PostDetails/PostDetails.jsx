import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    const Navigate  = useNavigate()
    const handelGoBack = () =>{
        Navigate((-1))
    }
    return (
        <div>
            <h1>this is post details</h1>
            <h2>ID: {post.id}</h2>
            <h2>title: {post.title}</h2>
            <p>body: {post.body}</p>
            <button onClick={handelGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;