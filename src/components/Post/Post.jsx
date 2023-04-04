import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    const Navigate =  useNavigate()
    const handelNavigate = () =>{
        Navigate(`/postDetails/${post.id}`)
    }
    
    return (
        <div className='post'>
            <h3> title: {post.title}</h3>
            <h2>userId: {post.userId}</h2>
            <Link to={`/postDetails/${post.id}`}>Show details</Link>
            <Link to={`/postDetails/${post.id}`}><button>Show details</button></Link>
            <button onClick={handelNavigate}>with handel button</button>
            
        </div>
    );
};

export default Post;