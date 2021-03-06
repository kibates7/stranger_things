import React, {useState} from 'react';
import {Button} from '@mui/material'
import NumberFormat from 'react-number-format';
import './NewPost.css'
import {createPost} from './api/index'
import {BrowserRouter as Router, useHistory } from "react-router-dom"

const NewPost = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("") 
    const [price, setPrice] = useState("")  
    const [location, setLocation] = useState("")  
    const [willDeliver, setWillDeliver] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        createPost(title, description,price, location, willDeliver, localStorage.getItem("token"))
        console.log(title, description, price, location, willDeliver);
        history.push('/posts/me')
    }
    return (
        <div className="NewPost">
            <form className="newPost__form" onSubmit={handleSubmit}>
                <h1>Create a new post</h1>
                <label>Title: </label>
                <input type="text" minLength='1' maxLength='20' required value={title} onChange={(e) => setTitle(e.target.value)}></input>
                
                <label>Description: </label>
                <input contentEditable="true" type="text" minLength='1' required value={description} onChange={(e) => setDescription(e.target.value)} ></input>
                
                <label>Price: </label>
                <NumberFormat prefix='$'  displayType="input" decimalSeparator="." thousandSeparator={true} defaultValue='0' value={price}  onValueChange={(e) => setPrice(e.value)}/>
                <label>Location: </label>
                <input contentEditable="true" type="text" minLength='1' required value={location} onChange={(e) => setLocation(e.target.value)} ></input>
                <br/>
                <label>Will Deliver: </label>
                <input type="checkbox" value={willDeliver} onChange={(e) => setWillDeliver(e.target.value)}></input>
                
                {/* <Button variant="contained" onClick={()=> history.push("/posts/me")} >Go Back To My Posts</Button> */}
                <Button variant="contained" type="submit">Create Post</Button>
                
                </form>
                
        </div>
    );
};

export default NewPost;