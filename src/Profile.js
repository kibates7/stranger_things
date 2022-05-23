import React, {useState, useEffect} from 'react';
import {getMyMessage} from './api/index'
import {Button} from '@mui/material'
import {useHistory} from "react-router-dom"
import './Profile.css'
import {fetchUserInfo} from './api/index'
import Modal from "react-bootstrap/Modal";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Profile = ({isLoggedIn}) => {
    const [incomingMessage, setIncomingMessage] = useState([])
    const [user, setUser] = useState("")
    const [selectedUser, setSelectedUser] = useState([])
    const history = useHistory()
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getMyMess = async () => {
        try {
          const response = await getMyMessage(localStorage.getItem('token'))
          
          setIncomingMessage(response)
          //console.log(response)
      } catch (error) {
          console.error()
      }
      }

      const getUser = async () => {
        try {
          const response = await fetchUserInfo(localStorage.getItem('token'))
          //let result = await data.json()
          setUser(response._id)
         //console.log(response._id)
      } catch (error) {
          console.error()
      }
      }

      

      useEffect( () => {
        getMyMess()
        getUser()
        
      }, [])

    return (
        <div className="profile">
            {isLoggedIn ?  <h1>My messages</h1>  :  <Button variant='contained' onClick={()=> history.push("/login")}>Login to view your messages</Button>}
            {isLoggedIn 

             && incomingMessage ? 
                
             
                incomingMessage.map(post => 
                    
               
                    <div className="messages__map" key={post._id}>
                       
                       {user === post.fromUser._id ? 
                       <div className="mySentMessage">
                       <h2>Sent To: {post.post.title}</h2>
                       <p>Message: {post.content}</p>
                       
                       <Button variant='outlined' onClick={()=> {
                  setSelectedUser(post);
                  handleShow()
                  }}>View</Button>
                       </div> : <><div className="myIncomingMessage">
                        <h2>My Post: {post.post.title}</h2>
                        <p>Message from {post.fromUser.username}: {selectedUser.content}</p>
                        <div className="incomingMessage_btns">
                      </div><Button variant='outlined' onClick={()=> {
                  setSelectedUser(post);
                  handleShow()
                  }}>View</Button></div></>
                      }
                    </div>
                    
                  )
                :
                
                <h1>You haven't received any messages</h1>
                
                }
         <Modal show={show} onHide={handleClose} style={{opacity:1, boxShadow: 'none'}} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered >
          <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {console.log(selectedUser.fromUser)}
          
            {/* {selectedUser ? 
          <><h1>{selectedUser.post.title} </h1><p>Message from {selectedUser.fromUser.username}: {selectedUser.content}</p><h4>{selectedUser.price}</h4></>
            
             : <p></p>
            } */}
        
             
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
         
        
        
        </Modal.Footer>
      </Modal>       
               
            
        </div>
    );
};

export default Profile;