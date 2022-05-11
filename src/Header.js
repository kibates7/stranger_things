import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            
                <h1>Stranger's Things</h1>
            
            <div className='header__nav'>
                <Router>
                <Link className='nav_link' to="/">Home</Link> 
                <Link className='nav_link' to="/posts">Posts</Link>
                <Link className='nav_link' to="/profile">Profile</Link>
                <Link className='nav_link' to="/logout">Logout</Link>  
                </Router>
                  
                  
                             
            </div>
        </div>
    );
};

export default Header;