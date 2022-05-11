import React from 'react';
import './Register.css'
import {Button} from '@mui/material'
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

const Register = () => {
    return (
        <div className='register'>
            <form className="register__form">
                <h1>Register</h1>
                <label>Username: </label>
                <input type="text" required></input>
                <br></br>
                <label>Password: </label>
                <input type="password" required></input>
                <br/>
                <label>Confirm password: </label>
                <input type="password" required></input>
                <br/>
                <Button variant="contained" onClick={() => {alert('registered')}}>Register</Button>
                <br />
                <Link to="/login">Already have an account? Sign in now</Link>
            </form>
        </div>
    );
};

export default Register;