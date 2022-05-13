import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Router>
                <h1>Stranger's Things</h1>
                <div className='header__nav'>
                    <Link className='nav_link' to="/">Home</Link> 
                    <Link className='nav_link' to="/posts">Posts</Link>
                    <Link className='nav_link' to="/profile">Profile</Link>
                    <Link className='nav_link' to="/login">Login</Link> 
                </div> 
            </Router>
        </div>
    );
};

export default Header;