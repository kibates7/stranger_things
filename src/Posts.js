import React, {useState, useEffect} from 'react';
import './Posts.css'
import UserPosts from './UserPosts';
import {BrowserRouter as Router, useHistory } from "react-router-dom"
import {Button} from '@mui/material'

const Posts = ({isLoggedIn}) => {
    const BASE_URL = 'https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-PT'
    const [posts, setPosts] = useState([])
    const history = useHistory()

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

    return (
        <div className='posts'>

          <h1>ALL POSTS</h1>
          {
            isLoggedIn ? <Button variant='contained' onClick={()=> history.push("/posts/me")}>Show My Posts</Button> : <Button variant='contained' onClick={()=> history.push("/login")}>Login to view your posts</Button>
          }
         
        {
          
          
          posts.map(post => 
            <div className="posts__map"key={post._id}>
               <h1>{post.title}</h1>
               <h3>{post.description}</h3>
               <p>{post.price}</p>
               <Button variant='outlined'>View</Button>
               
            </div>
          )
          
        }

        
      
        </div>
    );
};

export default Posts;