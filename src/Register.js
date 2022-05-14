import React, {useState} from 'react';
import './Register.css'
import {Button} from '@mui/material'
import {BrowserRouter as Router, Routes, useHistory, Route, Link } from "react-router-dom"
import { register } from './api/register';
// import register from './api/register';

const Register = ({token}) => {
    const [userName, setUserName] = useState("")
    const [firstPassword, setFirstPassword] = useState("") 
    const [password, setPassword] = useState("")  
    const [loginFailure, setLoginFailure] = useState(false)  
    const [error, setError] = useState(null);
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(firstPassword !== password){
            setLoginFailure(true)
            setFirstPassword("")
            setPassword("")
        }
        else{
        console.log('username, pass: ', userName, password, token)
        register(userName, password)

        if(token){
            setFirstPassword("")
            setUserName("");
            setPassword("");
            history.push('/login')
        }
    }
        
    }
        
    
    


    return (
        <div className='register'>
            <form className="register__form" onSubmit={handleSubmit}>
                <h1>Register</h1>
                <label>Username: </label>
                <input type="text" minLength='1' maxLength='20' required value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                <br></br>
                <label>Password: </label>
                <input type="password" minLength='1' maxLength='20' required value={firstPassword} onChange={(e) => setFirstPassword(e.target.value)} ></input>
                <br/>
                <label>Confirm password: </label>
                <input type="password" minLength='1' maxLength='20' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                {
                    loginFailure ? <p>Passwords do not match.</p> : <p></p>
                }
                <Button variant="contained" type="submit">Register</Button>
                <br />
                <Link to="/login">Already have an account? Sign in now</Link>
            </form>
        </div>
    );
};

export default Register;