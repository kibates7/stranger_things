import React, {useState, useEffect} from 'react';
import './Posts.css'

const Posts = () => {
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

    return (
        <div className='posts'>
            
        {
          posts.map(post => 
            <div className="posts__map"key={post._id}>
               <h1>{post.title}</h1>
               <h3>{post.description}</h3>
            </div>
          )
        }
      
        </div>
    );
};

export default Posts;