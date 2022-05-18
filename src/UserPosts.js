import React, {useState, useEffect} from 'react';
import {fetchUserInfo} from './api/index'
import {Button} from '@mui/material'
import PostAddIcon from '@mui/icons-material/PostAdd';
import {BrowserRouter as Router, useHistory } from "react-router-dom"
import './UserPosts.css'

const UserPosts = () => {
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState("")
    const history = useHistory()


    const showPosts = async () => {
        try {
            const response = await fetchUserInfo(localStorage.getItem('token'))
            //let result = await data.json()
            setPosts(response.posts)
            setUser(response.username)
        } catch (error) {
            console.error()
        }
       
    }

    useEffect( () => {
      showPosts()
      
    }, [])
    

    return (
        <div className="user__posts">
           <h1>{user}'s Posts</h1>
            <div className="user__btns">
           <Button variant='contained' onClick={()=> history.push("/posts")}>Show All Users' Posts</Button>
           <Button variant='contained' onClick={()=> history.push("/newpost")}>Make a new post <PostAddIcon></PostAddIcon></Button>
           </div>
            { posts.length > 0 ? 
                
                posts.map(post => 
                    
                    
                    <div className="posts__map" key={post._id}>
                        
                       <h1>{post.title}</h1>
                       <h3>{post.description}</h3>
                       <p>{post.price}</p>
                        <Button variant='outlined'>View</Button>
                        <Button variant='outlined' color='error'>Delete</Button>
                    </div>
                    
                  )
                :
                
                <h1>You haven't made any posts</h1>
                
                }
               
            
        </div>
    );
};

export default UserPosts;