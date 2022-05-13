import React, {useState} from 'react';
import './Register.css'
import {Button} from '@mui/material'
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// import register from './api/register';

const Register = ({token}) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")  

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('username, pass: ', userName, password, token)
        
            const BASE_URL = 'https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-PT'
            const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: userName,
                    password: password
            }
        })
    
        }).then(response => response.json())
          .then(result => {
            console.log(result);
            const jwtResponse = 'test2'
            localStorage.setItem('test2', jwtResponse)
            setUserName("");
            setPassword("");
        }).catch(console.error);
    }
        
    
    


    return (
        <div className='register'>
            <form className="register__form" onSubmit={handleSubmit}>
                <h1>Register</h1>
                <label>Username: </label>
                <input type="text" required value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                <br></br>
                <label>Password: </label>
                <input type="password" required></input>
                <br/>
                <label>Confirm password: </label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br/>
                <Button variant="contained" type="submit">Register</Button>
                <br />
                <Link to="/login">Already have an account? Sign in now</Link>
            </form>
        </div>
    );
};

export default Register;