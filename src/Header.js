import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './Header.css'

const Header = ({isLoggedIn}) => {
    return (
        <div className='header'>
           <Link className='nav_link' to="/"> <h1>Stranger's Things</h1></Link> 
               
                <div className='header__nav'>
                    <Link className='nav_link' to="/">Home</Link> 
                    <Link className='nav_link' to="/posts">Posts</Link>
                    <Link className='nav_link' to="/profile">Profile</Link>
                    {isLoggedIn ?  
                    <Link className='nav_link' to="/logout">Logout</Link> :
                    <Link className='nav_link' to="/login">Login</Link>  }
                    
                </div> 
            
        </div>
    );
};

export default Header;