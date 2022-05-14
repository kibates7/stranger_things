import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Register from './Register';
import {BrowserRouter as Router, Route } from "react-router-dom"
import "./app.css"
import Login from './Login';
import Welcome from './Welcome'
import Posts from './Posts';
import Logout from './Logout';

const App = () => {
  
  const tokenFromStorage = localStorage.getItem('token')
  const [token, setToken] = useState(tokenFromStorage) //if there isn't a value it will return null
  const [isLoggedIn, setIsLoggedIn] = useState(false)

 const handleLogin = () => {
    if(token) setIsLoggedIn(true)
 }

 useEffect(() => {
   handleLogin()
 }, isLoggedIn)


 
  return <div className='app'>
    <Header isLoggedIn={isLoggedIn}/>
    
      <Route exact path='/'><Welcome isLoggedIn={isLoggedIn}/></Route>
      {/* {token ? <h1>welcome</h1> : <Login setToken={setToken}/>} */}
      <Route path='/register'><Register token={token} /></Route>
      <Route path='/login'><Login token={token} setIsLoggedIn={setIsLoggedIn}/></Route>
      <Route path='/logout'><Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/></Route>
      <Route path='/posts'><Posts /></Route>

  </div>
}

ReactDOM.render(
  <Router>
  <App />
  </Router>,
  document.getElementById('app'),
);

