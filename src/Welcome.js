import React from 'react';
import {Button} from '@mui/material'
import { useHistory } from 'react-router-dom';
import './Welcome.css'

const Welcome = ({isLoggedIn}) => {
    const history = useHistory();


    return (
        <div className="welcome">
            <h1>Welcome to Stranger's Things!</h1>
            <div className="welcome__btns">
                {isLoggedIn ? <Button variant="outlined" onClick={()=> history.push("/profile")}>View Profile</Button> :  <Button variant="outlined" onClick={()=> history.push("/login")}>Log in</Button>}
           
            
            </div>
        </div>
    );
};

export default Welcome;