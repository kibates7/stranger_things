import React, {useState} from 'react';
import {Button} from '@mui/material'
import {useHistory, Link } from "react-router-dom"
import {login} from './api/login'
import './Login.css'


const Login = ({token, setIsLoggedIn}) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")  
    const [loginFailure, setLoginFailure] = useState(false)  
    const history = useHistory()
   

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log('username, pass: ', userName, password, token)
        login(userName, password)
        console.log('token: ', token)
        setUserName("");
        setPassword("");
        if(token){
        history.push('/')
        setIsLoggedIn(true)
        }
        else{
            setLoginFailure(true)
        }
            
    }

    return (
        <div className='login'>
            <form className="login__form" onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <label>Username: </label>
                <input type="text" minLength='1' maxLength='20' required value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                <br></br>
                <label>Password: </label>
                <input type="password" minLength='1' maxLength='20' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                
                {
                    loginFailure ? <p>User not found. Please try again</p> : <p></p>
                }
                <Button variant="contained" type="submit">Login</Button>
                <br />
                <Link to="/register">Don't have an account? Register now</Link>
            </form>
        </div>
    );
};

export default Login;