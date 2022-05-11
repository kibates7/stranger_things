import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Register from './Register';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Index from './api';
import "./app.css"
import Login from './Login';

const App = () => {
  const BASE_URL = 'https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-PT'
  const [posts, setPosts] = useState([])
  
  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`)
        const result = await response.json()
        const data = result.data.posts
        setPosts(data)
        //return result.data.posts
        
    } catch (error) {
        console.log(error)
    }
    }
    fetchPosts()
  }, [])
 
  return <div className='app'>
    <Header />
    <Router>
      <Route exact path='/'>
      
      <h1>Welcome to Stranger's Things!</h1>
      <button>View Profile</button>
      </Route>
      <Route path='/register'><Register /></Route>
      <Route path='/login'><Login /></Route>
    </Router>
      
     
     
      {/* <div className='posts'>
        {
          posts.map(post => 
            <div key={post._id}>
                {post.title}
            </div>
          )
        }
      </div> */}
      
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

