import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Register from './Register';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Index from './api';
import "./app.css"
import Login from './Login';
import Welcome from './Welcome'
import Posts from './Posts';

const App = () => {
  
  const tokenFromStorage = localStorage.getItem("")
  const [token, setToken] = useState(tokenFromStorage) //if there isn't a value it will return null
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  
 
  return <div className='app'>
    <Header />
    <Router>
      <Route exact path='/'><Welcome isLoggedIn={isLoggedIn}/></Route>
      {/* {token ? <h1>welcome</h1> : <Login setToken={setToken}/>} */}
      <Route path='/register'><Register token={token} /></Route>
      <Route path='/login'><Login token={token} setIsLoggedIn={setIsLoggedIn}/></Route>
      <Route path='/posts'><Posts /></Route>
    </Router>
      
     
     
      
      
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

