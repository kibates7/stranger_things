import React, {useState, useEffect} from 'react';
import {fetchUserInfo, deleteMyMessage} from './api/index'
import {Button} from '@mui/material'
import PostAddIcon from '@mui/icons-material/PostAdd';
import {BrowserRouter as Router, useHistory } from "react-router-dom"
import Modal from "react-bootstrap/Modal";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './UserPosts.css'

const UserPosts = () => {
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState("")
    const [selectedUser, setSelectedUser] = useState([])
    const history = useHistory()
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editHandler = event => {
      history.push({
          pathname: '/posts/edit',
          state: { detail: selectedUser }
      });
    }

    const showPosts = async () => {
        try {
            const response = await fetchUserInfo(localStorage.getItem('token'))
            setPosts(response.posts)
            setUser(response.username)
        } catch (error) {
            console.error()
        }
       
    }

    const deletePost = async(postId) => {
        try {
         
         const response = await deleteMyMessage(localStorage.getItem('token'), postId);
         window.location.reload(false);
         console.log(response);
        
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
                       <p>{post.description}</p>
                       <h4>Price: ${post.price}</h4>
                       <h4>Location: {post.location}</h4>
                       <Button variant='outlined' onClick={()=> {
                  setSelectedUser(post);
                  handleShow()
                  }}>View</Button>
                        {/* <Button variant='outlined' color='error'>Delete</Button> */}
                    </div>
                    
                  )
                :
                
                <h1>You haven't made any posts</h1>
                
                }
               <Modal show={show} onHide={handleClose} style={{opacity:1, boxShadow: 'none'}} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered >
          <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            
          <h1>{selectedUser.title} </h1>
            <p>{selectedUser.description}</p>
            <h4>${selectedUser.price}</h4>
            <h4>Location: {selectedUser.location}</h4>
             
        
             
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" color='success' onClick={editHandler}>
          Edit
        </Button>
          <Button variant="contained" color='error' onClick={()=>{deletePost(selectedUser._id)}}>
          Delete
        </Button>
        
        
        </Modal.Footer>
      </Modal>
            
        </div>
    );
};

export default UserPosts;