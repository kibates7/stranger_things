import React from 'react';
import './Login.css'
import {Button} from '@mui/material'
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


const Login = () => {
    return (
        <div className='login'>
            <form className="login__form">
                <h1>Log In</h1>
                <label>Username: </label>
                <input type="text"></input>
                <br></br>
                <label>Password: </label>
                <input type="password"></input>
                <br/>
                <Button variant="contained" onClick={() => {alert('logged in')}}>Login</Button>
                <br />
                <Link to="/register">Don't have an account? Register now</Link>
            </form>
        </div>
    );
};

export default Login;