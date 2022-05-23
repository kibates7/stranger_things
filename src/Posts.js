import React, {useState, useEffect} from 'react';
import './Posts.css'
import {BrowserRouter as Router, useHistory } from "react-router-dom"
import {Button} from '@mui/material'
import {fetchUserInfo, sendMyMessage, fetchPosts} from './api/index'
import { useAlert } from 'react-alert'


import Modal from "react-bootstrap/Modal";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Posts = ({isLoggedIn}) => {
    const BASE_URL = 'https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-PT'
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState([])
    const [userPosts, setUserPosts] = useState([])
    const [selectedUser, setSelectedUser] = useState([])
    const [message, setMessage] = useState("")
    const history = useHistory()
    const [show, setShow] = useState(false);
    const alert = useAlert();


   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  
   const sendMessage = async(postId) => {
     try {
      
      const response = await sendMyMessage(message, localStorage.getItem('token'), postId);
      alert.success('Message Sent')
      window.location.reload(false);
      console.log(response);
      setMessage("")
     } catch (error) {
       console.error()
     }
     
   }

    const getUser = async () => {
      try {
        const response = await fetchUserInfo(localStorage.getItem('token'))
        //let result = await data.json()
        setUser(response)
        
        setUserPosts(response.posts)
       // console.log(response)
    } catch (error) {
        console.error()
    }
    }


  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await fetchPosts(localStorage.getItem('token'))
        setPosts(response)
        
    } catch (error) {
        console.log(error)
    }
    }
    fetchAllPosts()
    getUser()
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
               <p>{post.description}</p>
               <h4><b>Price: </b>{post.price}</h4>
               <h2><b>Seller: {post.author.username}</b></h2>
               <h4><b>Location: </b> {post.location}</h4>
               { isLoggedIn ?
                 post.isAuthor ?  <Button variant='outlined' onClick={()=> {
                  setSelectedUser(post);
                  handleShow()
                  getUser()}}>View</Button> : <Button variant='outlined' onClick={()=> {
                    setSelectedUser(post)
                    handleShow()
                  getUser()}} >Send Message</Button> : <p></p>
               }
            </div>)
}
        <Modal show={show} onHide={handleClose} style={{opacity:1, boxShadow: 'none'}} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered >
        <Modal.Body>
          <h1>{selectedUser.title} </h1>
             <p>{selectedUser.description}</p>
            <h4>Price: {selectedUser.price}</h4>
            {/* <h4>Seller: {selectedUser.author.username}</h4> */}
             <h4>Location: {selectedUser.location}</h4>
             {selectedUser.isAuthor ?
            <p></p> :
             <input type="text" minLength='1'  placeholder="message" required value={message} onChange={(e) => setMessage(e.target.value)}></input>
             
            }
             
        </Modal.Body>
        <Modal.Footer>
          {console.log(selectedUser)}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {selectedUser.isAuthor ?
          <p></p> :
          <Button variant="primary" onClick={()=>{sendMessage(selectedUser._id)}}>
          Send Message
        </Button>
        }
        </Modal.Footer>
      </Modal>
               
          
          

        
      
        </div>
    );
};

export default Posts;