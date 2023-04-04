import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActivLink from '../ActivLink/ActivLink';

const Header = () => {
    return (
        <nav>
            <ActivLink to="/">Home</ActivLink>
            <ActivLink to="/about">About</ActivLink>
            <ActivLink to="/contuct">contuct</ActivLink>
            <ActivLink to="/friends">Friends</ActivLink>
            <ActivLink to="/posts">Post</ActivLink>
        </nav>
    );
};

export default Header;