import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Frined from '../Friend/Frined';

const Friends = () => {
    const friends = useLoaderData()
    return (
        <div>
            <h1>They are my friends{friends.length}</h1>
            <div>
                {
                    friends.map(friend  => <Frined key={friend.id} friend={friend}></Frined>)
                }
            </div>
        </div>
    );
};

export default Friends;