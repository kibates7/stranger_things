import React, {useState} from 'react';
import './Login.css'
import {Button} from '@mui/material'
import {BrowserRouter as Router, useHistory, Link } from "react-router-dom"


const Login = ({token, setIsLoggedIn}) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")  
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('username, pass: ', userName, password, token)
        
            const BASE_URL = 'https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-PT'
            const response = await fetch(`${BASE_URL}/users/login`, {
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
            console.log(result, "logging in worked");
            setUserName("");
            setPassword("");
           if(result.success) {
               history.push('/')
               setIsLoggedIn(true)
            }
        }).catch(console.error);
    }

    return (
        <div className='login'>
            <form className="login__form" onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <label>Username: </label>
                <input type="text" required value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                <br></br>
                <label>Password: </label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br/>
                <Button variant="contained" type="submit">Login</Button>
                <br />
                <Link to="/register">Don't have an account? Register now</Link>
            </form>
        </div>
    );
};

export default Login;