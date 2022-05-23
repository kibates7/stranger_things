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
import UserPosts from './UserPosts';
import NewPost from './NewPost'
import Profile from './Profile';
import EditPost from './EditPost';
import { positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

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
      <Route path='/login'><Login token={token} setIsLoggedIn={setIsLoggedIn} setToken={setToken}/></Route>
      <Route path='/logout'><Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/></Route>
      <Route exact path='/posts/me'><UserPosts token={token}/></Route>
      <Route exact path='/posts'><Posts isLoggedIn={isLoggedIn}/></Route>
      <Route exact path='/newpost'><NewPost token={token}/></Route>
      <Route path='/profile'><Profile isLoggedIn={isLoggedIn}></Profile></Route>
      <Route path='/posts/edit'><EditPost /></Route>
      
      
      
      
      

  </div>
}

ReactDOM.render(
  <Router>
    <AlertProvider template={AlertTemplate} {...options}>
  <App />
  </AlertProvider>
  </Router>,
  document.getElementById('app'),
);

