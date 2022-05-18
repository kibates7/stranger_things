import React, { useEffect } from 'react';
import {Button} from '@mui/material'
import { useHistory } from 'react-router-dom';
import './Logout.css'
import { useAlert } from 'react-alert'

const Logout = ({setIsLoggedIn}) => {
    const history = useHistory();
    const alert = useAlert();

    useEffect(() => {
        localStorage.clear(); //for removing the user entirely
        setIsLoggedIn(false)
        alert.success('Successfully logged out')
    }, [])

    return (
        <div className='logout'>
            <h1>Successfully logged out</h1>
            <Button variant="outlined" onClick={()=> {
                ;
                history.push("/login")
                }}>Log in</Button>
        </div>
    );
};

export default Logout;