import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>Name: {data.name}</h1>
            <p>Phone: {data.username}</p>
            <p>Website: {data.website}</p>
        </div>
    );
};

export default FriendDetail;