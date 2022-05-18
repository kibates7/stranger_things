import React, {useState} from 'react';
import {Button, getTouchRippleUtilityClass} from '@mui/material'
import {useHistory, Link } from "react-router-dom"
import {login} from './api/login'
import './Login.css'
import { useAlert } from 'react-alert'


const Login = ({token, setIsLoggedIn, setToken}) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")  
    const [loginFailure, setLoginFailure] = useState(false)  
    const history = useHistory()
    const alert = useAlert();
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await login(userName, password)
            console.log(response.success)
           if(response.success === true){
            localStorage.setItem('token', response.data.token)
            alert.success('Successfully logged in')
             history.push('/posts/me')
            setIsLoggedIn(true)
            setUserName("");
            setPassword("");
           }
           else{
            setLoginFailure(true)
           }
           
            
           
        } catch (error) {
            console.error()
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